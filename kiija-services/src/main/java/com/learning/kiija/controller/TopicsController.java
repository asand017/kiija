package com.learning.kiija.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.learning.kiija.beans.TopicsResponseBean;
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
    public TopicsResponseBean findTopics(@RequestParam Integer subjectId) {
        LOGGER.info("Retreiving Topics by Subject");
        TopicsResponseBean resp = new TopicsResponseBean();
        List<TopicProjection> topics = topicsRepository.findBySubjectId(subjectId);
        List<String> topic_names = new ArrayList<String>();
        for(TopicProjection topic : topics){
            topic_names.add(topic.getName());
        }
        resp.setTopicNames(topic_names);
        return resp;
    }
}
