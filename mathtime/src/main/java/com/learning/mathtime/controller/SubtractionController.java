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
import com.learning.mathtime.exceptions.ZeroDigitException;
import com.learning.mathtime.service.SubtractionService;

@RestController
public class SubtractionController {

    private static final Logger LOGGER = LogManager.getLogger(SubtractionController.class);

    @Autowired
    private SubtractionService subtractionService;
    
    @GetMapping("/arithmetic/subtraction")
    public ResponseEntity<AdditionSubtractionResponseBean> getSubtractionProblems(@RequestBody AdditionSubtractionRequestBean request) throws ZeroDigitException {
        LOGGER.info("Request for subtraction problem set received.");
        AdditionSubtractionResponseBean response = subtractionService.generateProblems(request);
        return ResponseEntity.ok(response);
    }

    
}
