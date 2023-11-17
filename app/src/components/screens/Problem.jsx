import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import Page from "../common/Page";
import { display } from "@mui/system";
import { Button, Paper, TextField } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AddIcon from '@mui/icons-material/Add'; // '+'
import RemoveIcon from '@mui/icons-material/Remove'; // '-'
import { styles, SUBJECTS } from "../common/Constants";
import DoorBackIcon from '@mui/icons-material/DoorBack';
import ApiService from "../../utils/ApiService";

const Problem = (props) => {

    const navigate = useNavigate();
    const {state} = useLocation();
    const [problemSet, setProblemSet] = useState(state.problems);
    const [bufferSet, setBufferSet] = useState([]); // buffer for problems on deck
    const [currentProblem, setCurrentProblem] = useState(0);
    const [answer, setAnswer] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [correct, setCorrect] = useState(null);
    const [count, setCount] = useState(state.problems.length);
    const type = state.type;
    const url = state.apiUrl;
    const problemSetRequest = state.request;

    useEffect(() => {
        let newArray = processProblemSet(problemSet);//problemSet.map((item, index) => ({index: index, operands: item.operands, solution: item.solution}));
        //console.log("new problem set: " + JSON.stringify(newArray) + ": " + count);
        setProblemSet(newArray);
    }, []);

    // useEffect(() => {
    //     console.log("@@@" + JSON.stringify(problemSet));
    // }, [problemSet])

    // useEffect(() => {
    //     console.log("@@@current problem" + JSON.stringify(currentProblem));
    // }, [currentProblem])

    // useEffect(() => {
    //     console.log("@@@count" + JSON.stringify(count));
    // }, [count])

    useEffect(() => {
        if(currentProblem > (count-3)){
            fetchMoreProblems();
        }
    }, [currentProblem])

    const processProblemSet = (problemSet) => {
        let processed = [];
        if(problemSet) {
            processed = problemSet.map((item, index) => ({index: index, operands: item.operands, solution: item.solution}));
        }
        return processed;
    }

    const fetchMoreProblems = () => {
        const fetchProblemSet = async () => {
            try {
                const nextProblemSet = await ApiService.fetchData(url, {
                    method: 'POST',
                    body: JSON.stringify(problemSetRequest)
                })
                //console.log("problemSet: " + JSON.stringify(nextProblemSet));
                setBufferSet(processProblemSet(nextProblemSet.problems));
            } catch (error) {
                console.log(error);
            }
        };
        fetchProblemSet();
    }

    const checkAnswer = (solution) => {
        setSubmitted(true);
        if(Number(solution) == answer){
            setCorrect(true);
        }else{
            setCorrect(false);
        }
    }

    const storeResult = () => {
        console.log("storeResult");
        //TODO: push question details

    }

    const goNext = () => {
        console.log("goNext");
        storeResult();
        setAnswer('');
        setCorrect(null);
        setSubmitted(false);
        if(currentProblem+1 < count) {
            setCurrentProblem(currentProblem+1);
        }else{
            console.log("old set: " + JSON.stringify(problemSet));
            console.log("new set: " + JSON.stringify(bufferSet));
            setProblemSet(bufferSet);
            setCurrentProblem(0);
        }
    }

    return(
        <Page>
            <Paper variant="elevation" elevation={3} sx={{marginTop: '12px'}}>
                {problemSet.map((item) => {
                    //console.log(item);
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
                                        <div style={{width: "30%", height: "6px", backgroundColor: "black", margin: "1em 0"}}/>
                                    </Grid>
                                </Grid>
                                <Grid key={item.index+"_c"} xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'} container sx={{flexGrow: 1}}>
                                    <Grid xs={3}>
                                        <form autoComplete="off" style={styles.flex_centered}>
                                            <TextField 
                                                error={correct !== null ? 
                                                    correct ? false : true
                                                    : false
                                                }
                                                key={item.index+"_c_input"}
                                                id="outlined-basic"
                                                label={correct !== null ? 
                                                    correct ? 
                                                        "Correct" : "Incorrect" 
                                                    : "Answer"}
                                                variant="outlined"
                                                type="number"
                                                size="small"
                                                color={correct !== null ?
                                                    correct ? 'success' : 'error'
                                                    : 'primary'}
                                                value={answer}
                                                autoComplete="new-password"
                                                inputProps={{
                                                    autoComplete: 'off',
                                                }}
                                                autoFocus
                                                onChange={(event) => {
                                                    const val = event.target.value;
                                                    setAnswer(val);
                                                }}
                                                sx={{
                                                    '& input:valid + fieldset': {
                                                        borderColor: correct ? 'green' : 'rgba(0,0,0,0.64)',
                                                        borderWidth: 2,
                                                        color: 'green'
                                                    },
                                                    '& .MuiFormLabel-root': {
                                                        color: correct !== null ?
                                                        correct ? 'green' : 'red'
                                                        : 'rgba(0,0,0,0.64)'
                                                    }
                                                }}
                                            />
                                        </form>
                                    </Grid>
                                </Grid>
                                <Grid key={item.index+"_d"} xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'} container sx={{flexGrow: 1}}>
                                    <Grid xs={2} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                                        <Button variant="text" 
                                                style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black'}}
                                                onClick={() => {
                                                    storeResult();
                                                    //navigate(SUBJECTS);
                                                }}
                                                startIcon={<DoorBackIcon/>}>
                                                Leave
                                        </Button>
                                    </Grid>
                                    <Grid xs={8} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                        <Button color="primary" variant="outlined" onClick={() => {checkAnswer(item.solution)}}>turn in</Button>
                                    </Grid>
                                    <Grid xs={2} display={'flex'} justifyContent={'end'} alignItems={'center'}>
                                        <Button variant="text" 
                                            style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                                            onClick={() => {
                                                goNext();
                                            }}>
                                            {correct ? 'Next' : 'Skip'} <NavigateNextIcon/>
                                        </Button>
                                    </Grid>
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