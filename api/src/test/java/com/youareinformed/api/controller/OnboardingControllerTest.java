package com.youareinformed.api.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.youareinformed.api.dto.SubmitRequest;
import com.youareinformed.api.service.OnboardingService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;

@WebMvcTest(OnboardingController.class)
class OnboardingControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private OnboardingService onboardingService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    @org.springframework.security.test.context.support.WithMockUser // Simulates a logged-in user
    void shouldReturn400WhenEmailIsInvalid() throws Exception {
        SubmitRequest invalidRequest = new SubmitRequest();
        invalidRequest.setEmail("not-an-email");

        mockMvc.perform(post("/api/onboarding/save")
                        .with(csrf()) // Adds the missing CSRF token
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest()); // Now it will reach validation and return 400
    }
}