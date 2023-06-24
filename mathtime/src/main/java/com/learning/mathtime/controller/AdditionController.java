package com.learning.mathtime.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdditionController {
    
    @GetMapping("/arithmetic/addition")
    public ResponseEntity<String> getResource() {
        // TODO: implement addition problem generation
        String resource = "Time to add!";
        return ResponseEntity.ok(resource);
    }
}
