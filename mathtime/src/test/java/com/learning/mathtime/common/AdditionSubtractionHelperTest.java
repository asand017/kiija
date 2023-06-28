package com.learning.mathtime.common;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.learning.mathtime.exceptions.ZeroDigitException;

public class AdditionSubtractionHelperTest {
    
    private AdditionSubtractionHelper helper;

    @BeforeEach
    public void setUp() {
        helper = new AdditionSubtractionHelper();
    }

    @Test
    public void shouldGenerateRandomInteger() throws ZeroDigitException {
        int randomNum = helper.getRandomNumber(1);
        assertNotNull(randomNum);
    }

    @Test
    public void shouldGenerateRandomIntegerWithNumberOfDigits() throws ZeroDigitException {
        int numberOfDigits = 3;
        int randomNum = helper.getRandomNumber(numberOfDigits);
        String randomNumString = String.valueOf(randomNum);
        assertEquals(numberOfDigits, randomNumString.length());
    }

    @Test
    public void shouldThrowErrorWhenZeroDigits() {
        assertThrows(ZeroDigitException.class, () -> {
            helper.getRandomNumber(0);
        });
        
    }
}
