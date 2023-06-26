package com.learning.mathtime.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.learning.mathtime.beans.AdditionSubtractionRequestBean;
import com.learning.mathtime.beans.AdditionSubtractionResponseBean;
import com.learning.mathtime.service.AdditionService;

@RestController
public class AdditionController {

    private static final Logger LOGGER = LogManager.getLogger(AdditionController.class);

    @Autowired
    private AdditionService additionService;

    @GetMapping("/arithmetic/addition")
    public ResponseEntity<AdditionSubtractionResponseBean> getAdditionProblems(@RequestBody AdditionSubtractionRequestBean request) {
        LOGGER.info("Request for addition problem set received.");
        AdditionSubtractionResponseBean response = additionService.generateProblems(request);
        return ResponseEntity.ok(response);
    }

    
}
