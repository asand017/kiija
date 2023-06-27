package com.learning.mathtime.beans;

import java.util.List;

public class ProblemBean {
    
    private List<String> operands;

    private String solution;

    public String getSolution() {
        return solution;
    }
    public void setSolution(String solution) {
        this.solution = solution;
    }

    public List<String> getOperands() {
        return operands;
    }
    public void setOperands(List<String> operands) {
        this.operands = operands;
    }

}
