package com.learning.kiija.repository.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.learning.kiija.repository.entities.Topic;
import com.learning.kiija.repository.projections.TopicProjection;

import java.util.List;

public interface TopicRepository extends JpaRepository<Topic, Integer> {

    List<TopicProjection> findBySubjectId(Integer subjectId);

}
