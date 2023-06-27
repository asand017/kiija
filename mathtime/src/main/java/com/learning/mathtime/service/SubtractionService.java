package com.learning.mathtime.service;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learning.mathtime.beans.AdditionSubtractionRequestBean;
import com.learning.mathtime.beans.AdditionSubtractionResponseBean;
import com.learning.mathtime.common.AdditionSubtractionHelper;

@Service
public class SubtractionService {
    
    private static final Logger LOGGER = LogManager.getLogger(SubtractionService.class);

    @Autowired
    private AdditionSubtractionHelper subtractionHelper;

    public AdditionSubtractionResponseBean generateProblems(AdditionSubtractionRequestBean request){
        LOGGER.info("Generating subtraction problem set");
        AdditionSubtractionResponseBean response = new AdditionSubtractionResponseBean();
        // TODO
        return response;
    }

}
