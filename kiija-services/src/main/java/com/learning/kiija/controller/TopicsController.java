package com.learning.kiija.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.learning.kiija.repository.projections.TopicProjection;
import com.learning.kiija.repository.repositories.TopicRepository;

@RestController
public class TopicsController {
    private static final Logger LOGGER = LogManager.getLogger(TopicsController.class);

    private final TopicRepository topicsRepository;

    public TopicsController(TopicRepository topicRepository) {
        this.topicsRepository = topicRepository;
    }

    @GetMapping("/topics")
    public Iterable<TopicProjection> findTopics(@RequestParam Integer subjectId) {
        LOGGER.info("Retreiving Topics by Subject");
        return topicsRepository.findBySubjectId(subjectId);
    }
}
