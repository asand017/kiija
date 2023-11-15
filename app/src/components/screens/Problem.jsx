import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import Page from "../common/Page";
import { display } from "@mui/system";
import { TextField } from "@mui/material";

const Problem = (props) => {

    const navigate = useNavigate();
    const {state} = useLocation();
    const [problemSet, setProblemSet] = useState(state.problems);
    const [currentProblem, setCurrentProblem] = useState(0);
    const [problemIndex, setProblemIndex] = useState(0);
    const [problemList, setProblemList] = useState([]);
    const [ans, setAns] = useState('');
    const type = state.type;

    useEffect(() => {
        //console.log(JSON.stringify(problemSet));
        let newArray = problemSet.map((item, index) => ({index: index, operands: item.operands, solution: item.solution}));
        console.log("new problem set: " + JSON.stringify(newArray));
        setProblemSet(newArray);
    }, []);


    useEffect(() => {
        console.log("@@@" + problemSet);
    }, [problemSet])

    return(
        <Page>
            <>Problem set</>
            {problemSet.map((item) => {
                console.log(item);
                if(item.index === currentProblem){
                    return (
                        <Grid container key={item.index}>
                            <Grid xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                {type}
                            </Grid>
                            {item.operands.map((operand, key) => {
                                return(
                                    <Grid key={key} xs={12}>{operand}</Grid>
                                );
                            })}
                            <Grid>
                                <TextField 
                                    id="outlined-basic"
                                    label="answer"
                                    variant="outlined"
                                    type="text"
                                    value={ans}
                                    onFocus={(event) => {
                                        if(event.target.autocomplete)
                                        {
                                          event.target.autocomplete = "new-password";
                                        } 
                                    }}
                                />
                            </Grid>
                        </Grid>
                    );
                }
            })}
        </Page>
    );
}

export default Problem;