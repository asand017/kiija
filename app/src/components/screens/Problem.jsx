import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import Page from "../common/Page";
import { display } from "@mui/system";
import { Button, Paper, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add'; // '+'
import RemoveIcon from '@mui/icons-material/Remove'; // '-'
import { styles } from "../common/Constants";
import Add from "@mui/icons-material/Add";

const Problem = (props) => {

    const navigate = useNavigate();
    const {state} = useLocation();
    const [problemSet, setProblemSet] = useState(state.problems);
    const count = state.problems.length;
    const [currentProblem, setCurrentProblem] = useState(1);
    const [problemIndex, setProblemIndex] = useState(0);
    const [problemList, setProblemList] = useState([]);
    const [ans, setAns] = useState('');
    const type = state.type;

    useEffect(() => {
        //console.log(JSON.stringify(problemSet));
        let newArray = problemSet.map((item, index) => ({index: index, operands: item.operands, solution: item.solution}));
        console.log("new problem set: " + JSON.stringify(newArray) + ": " + count);
        setProblemSet(newArray);
    }, []);


    useEffect(() => {
        console.log("@@@" + problemSet);
    }, [problemSet])

    return(
        <Page>
            <Paper variant="elevation" elevation={3}>
                {problemSet.map((item) => {
                    console.log(item);
                    if(item.index === currentProblem){ // TODO: add view slider to display in horizontal or vertical
                        return (
                            <Grid container key={item.index} minHeight={320}>
                                <Grid xs={12} sx={[styles.flex_centered]}>
                                    <h2>{type} ({currentProblem} of {count})</h2>
                                </Grid>
                                <Grid container xs={12} sx={[styles.flex_centered]}>
                                    {item.operands.map((operand, key) => {
                                        const addSign = key > 0;
                                        return(
                                            <>
                                                <Grid xs={6} display={'flex'} justifyContent={'right'} alignItems={'center'}>
                                                    {addSign && <AddIcon/>}
                                                </Grid>
                                                <Grid key={key} xs={6} display={'flex'} justifyContent={'left'} alignItems={'center'} paddingLeft={3}>
                                                    {operand}
                                                </Grid>
                                            </>
                                        );
                                    })}
                                    <Grid xs={12} sx={[styles.flex_centered]}>
                                        <div style={{width: "50%", height: "6px", backgroundColor: "black"}}/>
                                    </Grid>
                                </Grid>
                                <Grid xs={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <TextField 
                                        id="outlined-basic"
                                        label="answer"
                                        variant="outlined"
                                        type="text"
                                        value={ans}
                                        onFocus={(event) => {
                                            if(event.target.autocomplete)
                                                event.target.autocomplete = "new-password";
                                        }}
                                    />
                                </Grid>
                                <Grid xs={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <Button >turn in</Button>
                                </Grid>
                            </Grid>
                        );
                    }
                })}
            </Paper>
        </Page>
    );
}

export default Problem;