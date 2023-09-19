package com.learning.kiija.repository.repositories;

import org.springframework.data.repository.CrudRepository;

import com.learning.kiija.repository.entities.Mark;

public interface MarkRepository extends CrudRepository<Mark, Integer> {}