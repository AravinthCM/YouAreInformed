package com.youareinformed.api.controller;

import com.youareinformed.api.dto.SubmitRequest;
import com.youareinformed.api.service.OnboardingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/onboarding")
@RequiredArgsConstructor
public class OnboardingController {

    private final OnboardingService onboardingService;

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> save(
            @Valid @RequestBody SubmitRequest request
    ) {
        Map<String, Object> result = onboardingService.save(request);
        return ResponseEntity.ok(result);
    }
}