import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Page from "../common/Page";

const Problem = (props) => {

    const navigate = useNavigate();
    const {state} = useLocation();
    const problemSet = state.problems;
    //const numOfOperands = problemSet.length();
    const [problemIndex, setProblemIndex] = useState(0);
    const type = state.type;

    useEffect(() => {
        console.log(problemSet[problemIndex].operands);
        console.log(problemSet[problemIndex].solution);
    }, []);

    return(
        <Page>
            Problem set
            {problemSet[problemIndex].operands.map((index, item) => {

            })}
        </Page>
    );
}

export default Problem;