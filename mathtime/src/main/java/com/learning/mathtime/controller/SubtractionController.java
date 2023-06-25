package com.learning.mathtime.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.learning.mathtime.beans.AdditionSubtractionRequestBean;
import com.learning.mathtime.common.AdditionSubtractionHelper;

@RestController
public class SubtractionController {

    
    @Autowired
    private AdditionSubtractionHelper requestHelper;
    
    @GetMapping("/arithmetic/subtraction")
    public ResponseEntity<String> getSubtractionProblems(@RequestBody AdditionSubtractionRequestBean request) {
        // TODO: implement addition problem generation
        String response = requestHelper.responseBuilder(request);
        return ResponseEntity.ok(response);
    }

    
}
