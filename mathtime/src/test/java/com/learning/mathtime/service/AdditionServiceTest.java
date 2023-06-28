package com.learning.mathtime.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import com.learning.mathtime.common.AdditionSubtractionHelper;

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
    public void shouldReturnProblemSet() {
        
    }
    
}
