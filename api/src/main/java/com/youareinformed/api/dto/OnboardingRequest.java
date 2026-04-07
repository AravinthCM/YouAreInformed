package com.youareinformed.api.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class OnboardingRequest {

    @Email
    @NotBlank
    private String email;

    @NotBlank
    private String mode;

    @NotNull
    private Map<String, Double> income;

    @NotNull
    private Map<String, Double> needs;

    @NotNull
    private Map<String, Double> wants;

    @NotNull
    private Map<String, Double> futureMe;

    private List<CustomFieldDto> customFields;

    private List<String> interests;

    @Data
    public static class CustomFieldDto {
        private String label;
        private Double value;
        private String category;
    }
}