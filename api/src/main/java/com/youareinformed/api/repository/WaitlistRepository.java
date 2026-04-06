package com.youareinformed.api.repository;

import com.youareinformed.api.model.Waitlist;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface WaitlistRepository
        extends MongoRepository<Waitlist, String> {

    Optional<Waitlist> findByEmail(String email);
    boolean existsByEmail(String email);
}