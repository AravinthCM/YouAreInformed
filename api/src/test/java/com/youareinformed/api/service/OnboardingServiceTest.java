package com.youareinformed.api.service;

import com.youareinformed.api.model.OnboardingData;
import com.youareinformed.api.model.Waitlist;
import com.youareinformed.api.repository.OnboardingRepository;
import com.youareinformed.api.repository.WaitlistRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class OnboardingServiceTest {

    @Mock
    private OnboardingRepository onboardingRepository;

    @Mock
    private WaitlistRepository waitlistRepository;

    @InjectMocks
    private OnboardingService onboardingService;

    @Test
    @DisplayName("Should calculate a low score when 'Wants' exceed 30% and result in a deficit")
    void testCalculateResultWithDeficit() {
        OnboardingData data = OnboardingData.builder()
                .income(Map.of("primary", 15000.0))
                .needs(Map.of("food", 5000.0))
                .wants(Map.of("media", 3000.0))
                .futureMe(Map.of("savings", 2000.0))
                .customFields(Collections.singletonList(
                        OnboardingData.CustomField.builder()
                                .label("trip")
                                .value(6000.0) // Changed from 4000 to 6000
                                .category("wants")
                                .build()
                ))
                .build();

        // Act: Use a private method reflection or expose calculation for testing
        // For this example, we simulate the save flow
        Waitlist mockWaitlist = Waitlist.builder().id("123").email("john@example.com").build();
        when(waitlistRepository.findByEmail(any())).thenReturn(java.util.Optional.of(mockWaitlist));
        when(onboardingRepository.findByWaitlistId(any())).thenReturn(java.util.Optional.empty());
        when(onboardingRepository.save(any())).thenReturn(data);

        // We bypass the SubmitRequest mapper for brevity and test the logic in calculateResult
        Map<String, Object> result = onboardingService.save(new com.youareinformed.api.dto.SubmitRequest());

        // Assert
        assertThat(result.get("positive")).isEqualTo(false);
        assertThat((Integer) result.get("financialScore")).isLessThan(60);
        assertThat(result.get("wantsPercent")).isEqualTo(60.0);
    }

    @Test
    @DisplayName("Should return 100 score for a perfect 50-30-20 split")
    void testPerfectScore() {
        OnboardingData data = OnboardingData.builder()
                .income(Map.of("salary", 10000.0))
                .needs(Map.of("rent", 5000.0))
                .wants(Map.of("fun", 3000.0))
                .futureMe(Map.of("invest", 2000.0))
                .build();

        // Mocking necessary repository calls
        when(waitlistRepository.findByEmail(any())).thenReturn(java.util.Optional.of(new Waitlist()));
        when(onboardingRepository.save(any())).thenReturn(data);

        Map<String, Object> result = onboardingService.save(new com.youareinformed.api.dto.SubmitRequest());

        assertThat((Integer) result.get("financialScore")).isEqualTo(100);
        assertThat(result.get("positive")).isEqualTo(true);
    }
}