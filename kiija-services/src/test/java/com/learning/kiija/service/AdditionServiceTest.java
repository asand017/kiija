package com.learning.kiija.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.Arrays;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import com.learning.kiija.beans.AdditionSubtractionRequestBean;
import com.learning.kiija.beans.AdditionSubtractionResponseBean;
import com.learning.kiija.beans.ProblemBean;
import com.learning.kiija.common.AdditionSubtractionHelper;
import com.learning.kiija.exceptions.ZeroDigitException;

@ExtendWith(MockitoExtension.class)
public class AdditionServiceTest {

    @InjectMocks
    private AdditionService additionService;

    @Mock
    private AdditionSubtractionHelper mockHelper;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void shouldReturnAdditionIntegerProblemSet() throws ZeroDigitException {
        AdditionSubtractionRequestBean mockRequest = new AdditionSubtractionRequestBean();
        mockRequest.setType("integer");
        mockRequest.setDecimalDigits(0);
        mockRequest.setNumOfOperands(2);
        mockRequest.setOperandDigits(Arrays.asList(2,2));

        AdditionSubtractionResponseBean response = additionService.generateProblems(mockRequest);
        assertNotNull(response);
        assertEquals(10, response.getProblems().size());
    }

    @Test
    public void shouldReturnValidAdditionIntegerProblemSet() throws ZeroDigitException {
        AdditionSubtractionRequestBean mockRequest = new AdditionSubtractionRequestBean();
        mockRequest.setType("integer");
        mockRequest.setDecimalDigits(0);
        mockRequest.setNumOfOperands(2);
        mockRequest.setOperandDigits(Arrays.asList(2,2));

        AdditionSubtractionResponseBean response = additionService.generateProblems(mockRequest);
        for(ProblemBean p : response.getProblems()) {
            int sum = 0;
            for(int i = 0; i < mockRequest.getNumOfOperands(); i++){
                sum = sum + Integer.parseInt(p.getOperands().get(i));
            }
            assertEquals(String.valueOf(sum), p.getSolution());
        }
    }
    
}
