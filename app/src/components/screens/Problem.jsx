import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import Page from "../common/Page";
import { display } from "@mui/system";
import { Button, Paper, TextField } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AddIcon from '@mui/icons-material/Add'; // '+'
import RemoveIcon from '@mui/icons-material/Remove'; // '-'
import { styles } from "../common/Constants";
import Add from "@mui/icons-material/Add";

const Problem = (props) => {

    const navigate = useNavigate();
    const {state} = useLocation();
    const [problemSet, setProblemSet] = useState(state.problems);
    const count = state.problems.length;
    const [currentProblem, setCurrentProblem] = useState(0);
    const [answer, setAnswer] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [correct, setCorrect] = useState(null);
    const type = state.type;

    useEffect(() => {
        let newArray = problemSet.map((item, index) => ({index: index, operands: item.operands, solution: item.solution}));
        console.log("new problem set: " + JSON.stringify(newArray) + ": " + count);
        setProblemSet(newArray);
    }, []);


    // useEffect(() => {
    //     console.log("@@@" + problemSet);
    // }, [problemSet])

    const checkAnswer = (solution) => {
        setSubmitted(true);
        if(Number(solution) == answer){
            setCorrect(true);
        }else{
            setCorrect(false);
        }
    }

    return(
        <Page showBreadcrumbs={true}>
            <Paper variant="elevation" elevation={3}>
                {problemSet.map((item) => {
                    console.log(item);
                    if(item.index === currentProblem){ // TODO: add view slider to display in horizontal or vertical
                        return (
                            <Grid container key={item.index} minHeight={320}>
                                <Grid key={item.index+"_title"} xs={12} sx={[styles.flex_centered]}>
                                    <h2 key={item.index+"_title_h2"}>{type} ({currentProblem+1} of {count})</h2>
                                </Grid>
                                <Grid key={item.index+"_b"} container xs={12} sx={[styles.flex_centered]}>
                                    {item.operands.map((operand, key) => {
                                        const addSign = key > 0;
                                        return(
                                            <React.Fragment key={key+"_fragment"}>
                                                <Grid key={key+"_a"} xs={6} display={'flex'} justifyContent={'right'} alignItems={'center'}>
                                                    {addSign && <AddIcon/>}
                                                </Grid>
                                                <Grid key={key+"_b"} xs={6} display={'flex'} justifyContent={'left'} alignItems={'center'} paddingLeft={3} fontSize={'2em'}>
                                                    {operand}
                                                </Grid>
                                            </React.Fragment>
                                        );
                                    })}
                                    <Grid key={item.index+"_bar"} xs={12} sx={[styles.flex_centered]}>
                                        <div style={{width: "50%", height: "6px", backgroundColor: "black", margin: "1em 0"}}/>
                                    </Grid>
                                </Grid>
                                <Grid key={item.index+"_c"} xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'} container sx={{flexGrow: 1}}>
                                    <Grid xs={2} xsOffset={0}>
                                        <form autoComplete="off">
                                            <TextField 
                                            key={item.index+"_c_input"}
                                            id="outlined-basic"
                                            label="answer"
                                            variant="outlined"
                                            type="number"
                                            size="small"
                                            value={answer}
                                            autoComplete="new-password"
                                            inputProps={{
                                                autoComplete: 'off',
                                            }}
                                            autoFocus
                                            // onFocus={(event) => {
                                            //     if(event.target.autocomplete)
                                            //         event.target.autocomplete = "new-password";
                                            // }}
                                            onChange={(event) => {
                                                console.log("triggered");
                                                const val = event.target.value;
                                                setAnswer(val);
                                            }}
                                        /></form>
                                    </Grid>
                                    {submitted && <div style={{position: "absolute", color: correct ? 'green' : 'red', left: '55%'}}>
                                        {correct ? 'Correct' : 'Incorrect'}
                                    </div>}
                                </Grid>
                                <Grid key={item.index+"_d"} xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <Button color="primary" variant="outlined" onClick={() => {checkAnswer(item.solution)}}>turn in</Button>
                                    {correct && <Button variant="text" 
                                        style={{position: "absolute", left: '68%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                                        onClick={() => {
                                            setAnswer('');
                                            setCorrect(null);
                                            setSubmitted(false);
                                            setCurrentProblem(currentProblem+1);
                                        }}>
                                        Next <NavigateNextIcon/>
                                    </Button>}
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