package com.youareinformed.api.service;

import com.youareinformed.api.dto.SubmitRequest;
import com.youareinformed.api.model.OnboardingData;
import com.youareinformed.api.model.Waitlist;
import com.youareinformed.api.repository.OnboardingRepository;
import com.youareinformed.api.repository.WaitlistRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class OnboardingService {

    private final OnboardingRepository onboardingRepository;
    private final WaitlistRepository waitlistRepository;

    public Map<String, Object> save(SubmitRequest request) {

        // Step 1 — Save or fetch waitlist entry by email
        Waitlist waitlist = waitlistRepository
                .findByEmail(request.getEmail())
                .orElseGet(() -> waitlistRepository.save(
                        Waitlist.builder()
                                .email(request.getEmail())
                                .build()
                ));

        // Step 2 — Map custom fields dto to model
        List<OnboardingData.CustomField> customFields = null;
        if (request.getCustomFields() != null) {
            customFields = request.getCustomFields()
                    .stream()
                    .map(cf -> OnboardingData.CustomField.builder()
                            .label(cf.getLabel())
                            .value(cf.getValue())
                            .category(cf.getCategory())
                            .build())
                    .toList();
        }

        // Step 3 — Build onboarding document
        OnboardingData data = OnboardingData.builder()
                .waitlistId(waitlist.getId())
                .userId(null)
                .mode(request.getMode())
                .income(request.getIncome())
                .needs(request.getNeeds())
                .wants(request.getWants())
                .futureMe(request.getFutureMe())
                .customFields(customFields)
                .interests(request.getInterests())
                .build();

        // Step 4 — Update if already exists for this waitlist entry
        onboardingRepository
                .findByWaitlistId(waitlist.getId())
                .ifPresent(existing -> data.setId(existing.getId()));

        // Step 5 — Save to MongoDB
        OnboardingData saved = onboardingRepository.save(data);

        // Step 6 — Calculate and return result
        return calculateResult(saved);
    }

    // -----------------------------------------------
    // Score + percentage calculation
    // -----------------------------------------------
    private Map<String, Object> calculateResult(OnboardingData data) {

        // 1. Calculate base totals from the nested Maps
        double totalIncome   = sumMap(data.getIncome());
        double totalNeeds    = sumMap(data.getNeeds());
        double totalWants    = sumMap(data.getWants());
        double totalFutureMe = sumMap(data.getFutureMe());

        // 2. Add custom fields to their respective category totals
        if (data.getCustomFields() != null) {
            for (OnboardingData.CustomField cf : data.getCustomFields()) {
                if (cf.getValue() == null) continue;
                switch (cf.getCategory().toLowerCase()) {
                    case "income"   -> totalIncome   += cf.getValue();
                    case "needs"    -> totalNeeds    += cf.getValue();
                    case "wants"    -> totalWants    += cf.getValue();
                    case "futureme" -> totalFutureMe += cf.getValue();
                }
            }
        }

        // 3. Calculate Percentages based on Total Income
        double needsPct  = totalIncome > 0 ? (totalNeeds    / totalIncome) * 100 : 0;
        double wantsPct  = totalIncome > 0 ? (totalWants    / totalIncome) * 100 : 0;
        double futurePct = totalIncome > 0 ? (totalFutureMe / totalIncome) * 100 : 0;

        // 4. Determine if the budget is sustainable (Cash Flow)
        // A budget is positive ONLY if Income covers Needs + Wants + Savings goals
        double totalOutgoing = totalNeeds + totalWants + totalFutureMe;
        boolean positive = totalOutgoing <= totalIncome;

        // 5. Calculate Score with weighted penalties
        // Higher multipliers (1.0 and 1.5) make the score more sensitive to bad habits
        double needsPenalty   = Math.abs(needsPct - 50)  * 0.5;
        double wantsPenalty   = Math.abs(wantsPct - 30)  * 1.0;
        double futurePenalty  = Math.abs(futurePct - 20) * 1.5;

        double baseScore = 100 - needsPenalty - wantsPenalty - futurePenalty;

        // Apply a "Deficit Tax": If they spend more than they earn,
        // drop the score significantly (e.g., -20 points)
        if (!positive) {
            baseScore -= 20;
        }

        int finalScore = (int) Math.max(0, Math.min(100, baseScore));

        // 6. Build the response Map
        Map<String, Object> result = new LinkedHashMap<>();
        result.put("financialScore",   finalScore);
        result.put("needsPercent",     round(needsPct));
        result.put("wantsPercent",     round(wantsPct));
        result.put("futureMePercent",  round(futurePct));
        result.put("positive",         positive);

        // Optional: useful for debugging or UI display
        result.put("monthlySurplus",   round(totalIncome - totalOutgoing));

        return result;
    }

    // -----------------------------------------------
    // Helpers
    // -----------------------------------------------
    private double sumMap(Map<String, Double> map) {
        if (map == null) return 0;
        return map.values()
                .stream()
                .filter(java.util.Objects::nonNull) // Add this safety check!
                .mapToDouble(Double::doubleValue)
                .sum();
    }

    private double round(double value) {
        return Math.round(value * 100.0) / 100.0;
    }
}