package com.learning.kiija.beans;

import java.time.LocalDateTime;

public class ErrorResponseBean {

    private int statusCode;

    private String errorMessage;

    private LocalDateTime timestamp;

    public ErrorResponseBean(int statusCode, String errorMessage) {
        setStatusCode(statusCode);
        setErrorMessage(errorMessage);
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

}
