package com.learning.mathtime.controller;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.Arrays;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

import com.learning.mathtime.beans.AdditionSubtractionRequestBean;
import com.learning.mathtime.beans.AdditionSubtractionResponseBean;
import com.learning.mathtime.exceptions.ZeroDigitException;
import com.learning.mathtime.service.AdditionService;

@ExtendWith(MockitoExtension.class)
public class AdditionControllerTest {

    @InjectMocks
    private AdditionController controller;

    @Mock
    private AdditionService mockAdditionService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    public void shouldReturnAdditionProblemSetPayload() throws ZeroDigitException {
        AdditionSubtractionResponseBean mockResponse = new AdditionSubtractionResponseBean();
        AdditionSubtractionRequestBean mockRequest = new AdditionSubtractionRequestBean();
        mockRequest.setType("integer");
        mockRequest.setDecimalDigits(0);
        mockRequest.setNumOfOperands(2);
        mockRequest.setOperandDigits(Arrays.asList(2,2));

        when(mockAdditionService.generateProblems(mockRequest)).thenReturn(mockResponse);
        
        ResponseEntity<AdditionSubtractionResponseBean> resp = controller.getAdditionProblems(mockRequest);
        assertNotNull(resp);

    }

}
