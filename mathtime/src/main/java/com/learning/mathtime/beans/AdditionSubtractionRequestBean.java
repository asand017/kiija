package com.learning.mathtime.beans;

import java.util.List;

public class AdditionSubtractionRequestBean {
    
    private int numOfOperands;
    
    private List<Integer> operandDigits;

    private int decimalDigits = 0;

    private String type;

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

    public List<Integer> getOperandDigits() {
        return operandDigits;
    }

    public void setOperandDigits(List<Integer> operandDigits) {
        this.operandDigits = operandDigits;
    }

    public int getDecimalDigits() {
        return decimalDigits;
    }

    public void setDecimalDigits(int decimalDigits) {
        this.decimalDigits = decimalDigits;
    }
}
