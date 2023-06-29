package com.learning.mathtime.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learning.mathtime.beans.AdditionSubtractionRequestBean;
import com.learning.mathtime.beans.AdditionSubtractionResponseBean;
import com.learning.mathtime.beans.ProblemBean;
import com.learning.mathtime.common.AdditionSubtractionHelper;
import com.learning.mathtime.common.Constants;
import com.learning.mathtime.exceptions.ZeroDigitException;

@Service
public class SubtractionService {
    
    private static final Logger LOGGER = LogManager.getLogger(SubtractionService.class);

    @Autowired
    private AdditionSubtractionHelper subtractionHelper;

    public AdditionSubtractionResponseBean generateProblems(AdditionSubtractionRequestBean request) throws ZeroDigitException{
        LOGGER.info("Generating subtraction problem set");
        AdditionSubtractionResponseBean response = new AdditionSubtractionResponseBean();
        List<ProblemBean> problems = generateProblemsList(request);
        response.setProblems(problems);
        return response;
    }

    private List<ProblemBean> generateProblemsList(AdditionSubtractionRequestBean request) throws ZeroDigitException {
        List<ProblemBean> problems = new ArrayList<>();
        for(int i = 0; i < Constants.PAYLOAD_COUNT; i++){
            problems.add(generateProblem(request));
        }
        return problems;
    }

    private ProblemBean generateProblem(AdditionSubtractionRequestBean request) throws ZeroDigitException {
        ProblemBean problem = new ProblemBean();
        List<String> operands = new ArrayList<>();

        List<Integer> operandDigits = request.getOperandDigits();
        String type = request.getType();
        int numOfOperands = request.getNumOfOperands();
        int decimalDigits = request.getDecimalDigits();

        for(int i = 0; i < numOfOperands; i++){
            if(type.equals(Constants.INTEGER)){
                try {
                    int randomNum = subtractionHelper.getRandomNumber(operandDigits.get(i));
                    operands.add(String.valueOf(randomNum));
                } catch (ZeroDigitException e) {
                    throw new ZeroDigitException(e);
                }
            }else if(type.equals(Constants.DECIMAL)){
                Double randomNum = subtractionHelper.getRandomNumber(operandDigits.get(i), decimalDigits);
                operands.add(String.valueOf(randomNum));
            }
        }
        problem.setOperands(operands);

        if(type.equals(Constants.INTEGER)){
            problem.setSolution(String.valueOf(getIntegerDifference(operands)));
        }else if(type.equals(Constants.DECIMAL)){
            problem.setSolution(String.valueOf(getDoubleDifference(operands)));
        }

        return problem;
    }

    private Integer getIntegerDifference(List<String> operands) {
        int difference = 0;
        for(int i = 0; i < operands.size(); i++){
            if(i == 0){
                difference = Integer.parseInt(operands.get(i));
                continue;
            }
            difference = difference - Integer.parseInt(operands.get(i));
        }
        return difference;
    }

    private Double getDoubleDifference(List<String> operands) {
        Double difference = 0.0;
        for(int i = 0; i < operands.size(); i++){
            if(i == 0){
                difference = Double.parseDouble(operands.get(i));
                continue;
            }
            difference = difference - Double.parseDouble(operands.get(i));
        }
        return difference;
    }

}
