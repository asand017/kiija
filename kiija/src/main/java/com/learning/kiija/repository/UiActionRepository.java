package com.learning.kiija.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UiActionRepository extends JpaRepository<UiAction, Long> {}
