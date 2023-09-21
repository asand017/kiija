package com.learning.kiija.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.learning.kiija.beans.SubjectsResponseBean;
import com.learning.kiija.helpers.SubjectsResponseHelper;

@RestController
public class SubjectsController {
    private static final Logger LOGGER = LogManager.getLogger(SubjectsController.class);

    @Autowired
    private SubjectsResponseHelper subjectsResponseHelper;

    @GetMapping("/subjects")
    public SubjectsResponseBean findAllSubjects() {
        LOGGER.info("Retrieving Subjects list");
        SubjectsResponseBean resp = subjectsResponseHelper.buildSubjectsResponseBean();
        //resp.setSubjects(this.subjectRepository.findAll());
        return resp;
    }
}
