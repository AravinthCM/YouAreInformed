package com.youareinformed.api.repository;

import com.youareinformed.api.model.OnboardingData;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface OnboardingRepository
        extends MongoRepository<OnboardingData, String> {

    Optional<OnboardingData> findByWaitlistId(String waitlistId);
    Optional<OnboardingData> findByUserId(String userId);
    boolean existsByWaitlistId(String waitlistId);
}