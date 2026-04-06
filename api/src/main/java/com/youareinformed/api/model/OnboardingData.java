package com.youareinformed.api.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "onboarding_data")
public class OnboardingData {

    @Id
    private String id;

    @Indexed
    private String waitlistId;

    @Indexed
    private String userId;

    private String mode;         // "individual" | "household"

    private Map<String, Double> income;
    private Map<String, Double> needs;
    private Map<String, Double> wants;
    private Map<String, Double> futureMe;

    private List<CustomField> customFields;
    private List<String> interests;

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class CustomField {
        private String label;
        private Double value;
        private String category;
    }
}