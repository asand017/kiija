package com.learning.mathtime.common;

import org.springframework.stereotype.Component;

import com.learning.mathtime.beans.AdditionSubtractionRequestBean;

@Component
public class AdditionSubtractionHelper {

    public String responseBuilder(AdditionSubtractionRequestBean request) {
        String response = "Time to practice!";
        int numOfOperands = request.getNumOfOperands();
        int operand1Digits = request.getOperand1Digits();
        int operand2Digits = request.getOperand2Digits();
        String type = request.getType();
        response = response + " | parameters: operands=" + Integer.toString(numOfOperands) + ", "
            + "digit1=" + Integer.toString(operand1Digits) + ", "
            + "digit2=" + Integer.toString(operand2Digits) + ", "
            + "type=" + type;

        return response;
    }
}
