package com.learning.kiija.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learning.kiija.beans.AdditionSubtractionRequestBean;
import com.learning.kiija.beans.AdditionSubtractionResponseBean;
import com.learning.kiija.beans.ProblemBean;
import com.learning.kiija.common.AdditionSubtractionHelper;
import com.learning.kiija.common.Constants;
import com.learning.kiija.exceptions.ZeroDigitException;

@Service
public class AdditionService {

    private static final Logger LOGGER = LogManager.getLogger(AdditionService.class);

    @Autowired
    private AdditionSubtractionHelper additionHelper;
    
    public AdditionSubtractionResponseBean generateProblems(AdditionSubtractionRequestBean request) throws ZeroDigitException{
        LOGGER.info("Generating addition problem set");
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
                    int randomNum = additionHelper.getRandomNumber(operandDigits.get(i));
                    operands.add(String.valueOf(randomNum));
                } catch (ZeroDigitException e) {
                    throw new ZeroDigitException(e);
                }
            }else if(type.equals(Constants.DECIMAL)){
                Double randomNum = additionHelper.getRandomNumber(operandDigits.get(i), decimalDigits);
                operands.add(String.valueOf(randomNum));
            }
        }
        problem.setOperands(operands);

        if(type.equals(Constants.INTEGER)){
            problem.setSolution(String.valueOf(getIntegerSum(operands)));
        }else if(type.equals(Constants.DECIMAL)){
            problem.setSolution(String.valueOf(getDoubleSum(operands)));
        }

        return problem;
    }

    private Integer getIntegerSum(List<String> operands) {
        int sum = 0;
        for(String operand : operands) {
            sum = sum + Integer.parseInt(operand);
        }
        return sum;
    }

    private Double getDoubleSum(List<String> operands) {
        Double sum = 0.0;
        for(String operand : operands) {
            Double operandTemp = Double.parseDouble(operand);
            sum = sum + operandTemp;
        }
        return sum;
    }
}
