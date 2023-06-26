package com.learning.mathtime.common;

import java.util.Random;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Component;

@Component
public class AdditionSubtractionHelper {

    private static final Logger LOGGER = LogManager.getLogger(AdditionSubtractionHelper.class);

    public int getRandomNumber(int numberOfDigits) {
        int min = (int) Math.pow(10, numberOfDigits - 1);
        int max = (int) Math.pow(10, numberOfDigits) - 1;

        Random random = new Random();
        int randomNumber = random.nextInt(max - min + 1) + min;
        LOGGER.info("generated random number - " + randomNumber);
        return randomNumber;
    }

    public Double getRandomNumber(int numberOfDigits, int numberOfDecimals) {
        // TODO
        Double randomNumber = 0.0;

        return randomNumber;
    }
}
