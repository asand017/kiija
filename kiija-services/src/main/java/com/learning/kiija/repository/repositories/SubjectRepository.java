package com.learning.kiija.repository.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.learning.kiija.repository.entities.Subject;

public interface SubjectRepository extends JpaRepository<Subject, Integer> {

    List<Subject> findAll();
}
