package com.learning.kiija.repository.repositories;

import org.springframework.data.repository.CrudRepository;

import com.learning.kiija.repository.entities.User;

public interface UserRepository extends CrudRepository<User, Integer> {}
