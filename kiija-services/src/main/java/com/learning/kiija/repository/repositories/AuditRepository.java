package com.learning.kiija.repository.repositories;

import org.springframework.data.repository.CrudRepository;

import com.learning.kiija.repository.entities.Audit;

public interface AuditRepository extends CrudRepository<Audit, Integer> {}
