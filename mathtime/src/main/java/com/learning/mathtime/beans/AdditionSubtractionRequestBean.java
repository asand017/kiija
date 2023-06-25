package com.learning.mathtime.beans;

public class AdditionSubtractionRequestBean {
    
    private int numOfOperands;
    
    private int operand1Digits;

    private int operand2Digits;

    private String type;

    public int getOperand1Digits() {
        return operand1Digits;
    }

    public void setOperand1Digits(int operand1Digits) {
        this.operand1Digits = operand1Digits;
    }

    public int getOperand2Digits() {
        return operand2Digits;
    }

    public void setOperand2Digits(int operand2Digits) {
        this.operand2Digits = operand2Digits;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getNumOfOperands() {
        return numOfOperands;
    }

    public void setNumOfOperands(int numOfOperands) {
        this.numOfOperands = numOfOperands;
    }

    
}
