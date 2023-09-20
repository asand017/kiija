package com.learning.kiija.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.learning.kiija.beans.SubjectsResponseBean;
import com.learning.kiija.repository.repositories.SubjectRepository;

@RestController
public class SubjectsController {
    private static final Logger LOGGER = LogManager.getLogger(SubjectsController.class);

    private final SubjectRepository subjectRepository;

    public SubjectsController(SubjectRepository subjectRepository) {
        this.subjectRepository = subjectRepository;
    }

    @GetMapping("/subjects")
    public SubjectsResponseBean findAllSubjects() {
        LOGGER.info("Retrieving Subjects list");
        SubjectsResponseBean resp = new SubjectsResponseBean();
        resp.setSubjects(this.subjectRepository.findAll());
        return resp;
    }
}