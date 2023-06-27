package com.learning.mathtime.common;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.learning.mathtime.beans.ErrorResponseBean;
import com.learning.mathtime.exceptions.ZeroDigitException;

@RestControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler(ZeroDigitException.class)
    public ResponseEntity<ErrorResponseBean> handleResourceNotFoundException(ZeroDigitException e) {
        ErrorResponseBean errorResponse = new ErrorResponseBean(HttpStatus.NOT_FOUND.value(), e.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
    }

    // Add more exception handlers for other exceptions

}
