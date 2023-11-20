import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import Page from "../common/Page";
import { Button, Paper, TextField } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AddIcon from '@mui/icons-material/Add'; // '+'
import RemoveIcon from '@mui/icons-material/Remove'; // '-'
import { styles, SUMMARY } from "../common/Constants";
import DoorBackIcon from '@mui/icons-material/DoorBack';
import ApiService from "../../utils/ApiService";

const Problem = (props) => {

    const navigate = useNavigate();
    const {state} = useLocation();
    const [problemSet, setProblemSet] = useState(state.problems); // problem set state
    const [bufferSet, setBufferSet] = useState([]); // buffer for problems on deck
    const [currentProblem, setCurrentProblem] = useState(0); // problem set index of the current displayed problem
    const [answer, setAnswer] = useState(''); // user input answer
    const [submitted, setSubmitted] = useState(false); // flag for first problem submission
    const [isCorrect, setIsCorrect] = useState(null); // decision flag if user answer for problem is correct
    const [numCorrect, setNumCorrect] = useState(0); // # of problems answered correctly on first attempt
    const [numIncorrect, setNumIncorrect] = useState(0); // # of problems answered incorrectly on first attempt
    const [numProblemsAttempted, setNumProblemsAttempted] = useState(0); // # of problems attempted in the session
    const [attempts, setAttempts] = useState(0); // # of attempts on the current problem
    const [count, setCount] = useState(state.problems.length); // # problem set array size
    const [summaryData, setSummaryData] = useState({}); // session summary object to be sent to Summary screen
    const type = state.type;
    const url = state.apiUrl;
    const problemSetRequest = state.request;

    useEffect(() => {
        setProblemSet(processProblemSet(problemSet));
    }, []);

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
                setBufferSet(processProblemSet(nextProblemSet.problems));
            } catch (error) {
                console.log(error);
            }
        };
        fetchProblemSet();
    }

    const checkAnswer = (solution) => {
        if(Number(solution) == answer){
            if(!submitted)
                setNumCorrect(numCorrect+1);
            setIsCorrect(true);
        }else{
            if(!submitted)
                setNumIncorrect(numIncorrect+1);
            setIsCorrect(false);
        }
        setSubmitted(true);
        setAttempts(attempts+1);
    }

    const storeResult = () => {
        console.log("storeResult");
        //TODO: push question details, save # correct & incorrect to object that will be passed to summary screen
        setSummaryData({
            totalAnswered: numProblemsAttempted,
            totalCorrect: numCorrect,
            totalIncorrect: numIncorrect
        })
    }

    const goNext = () => {
        storeResult();
        setAnswer('');
        setAttempts(0);
        setIsCorrect(null);
        setSubmitted(false);
        setNumProblemsAttempted(numProblemsAttempted+1);
        if(currentProblem+1 < count) {
            setCurrentProblem(currentProblem+1);
        }else{
            setProblemSet(bufferSet);
            setCurrentProblem(0);
        }
    }

    return(
        <Page>
            <Paper variant="elevation" elevation={3} sx={{marginTop: '12px'}}>
                {problemSet.map((item) => {
                    if(item.index === currentProblem){ // TODO: add view slider to display in horizontal or vertical
                        return (
                            <Grid container key={item.index} minHeight={320}>
                                <Grid key={item.index+"_title"} xs={12} sx={[styles.flex_centered]} container>
                                    <Grid key={item.index+"_count"} xs={2} sx={{padding: '6px', alignSelf: 'flex-start'}}>
                                        <div>Problems done: {numProblemsAttempted}</div>
                                        <div>Correct: {numCorrect}</div>
                                        <div>Incorrect: {numIncorrect}</div>
                                    </Grid>
                                    <Grid key={item.index+"_title_h2_container"} xs={8} sx={[styles.flex_centered]}>
                                        <h2 key={item.index+"_title_h2"}>{type}</h2>
                                    </Grid> 
                                    <Grid key={item.index+"_attempts"} xs={2} sx={{padding: '6px', alignSelf: 'flex-start'}}>
                                        <div style={{float: 'right'}}>Attempts: {attempts}</div>
                                    </Grid> {/* Filler cell */}
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
                                                error={isCorrect !== null ? 
                                                    isCorrect ? false : true
                                                    : false
                                                }
                                                key={item.index+"_c_input"}
                                                id="outlined-basic"
                                                label={isCorrect !== null ? 
                                                    isCorrect ? 
                                                        "Correct" : "Incorrect" 
                                                    : null}
                                                variant="outlined"
                                                type="number"
                                                size="small"
                                                color={isCorrect !== null ?
                                                    isCorrect ? 'success' : 'error'
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
                                                onKeyDown={e => {
                                                    if(e.key === "Enter"){
                                                        checkAnswer(item.solution);
                                                        e.preventDefault();
                                                    }
                                                }}
                                                sx={{
                                                    '& input:valid + fieldset': {
                                                        borderColor: isCorrect ? 'green' : 'rgba(0,0,0,0.64)',
                                                        borderWidth: 2,
                                                        color: 'green'
                                                    },
                                                    '& .MuiFormLabel-root': {
                                                        color: isCorrect !== null ?
                                                        isCorrect ? 'green' : 'red'
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
                                                    navigate(SUMMARY, {
                                                        state: {
                                                            summary: summaryData,
                                                            topic: type  
                                                        }}
                                                    );
                                                }}
                                                startIcon={<DoorBackIcon/>}>
                                                Finish
                                        </Button>
                                    </Grid>
                                    <Grid xs={8} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                        <Button disabled={isCorrect} color="primary" variant="outlined" onClick={() => {checkAnswer(item.solution)}}>turn in</Button>
                                    </Grid>
                                    <Grid xs={2} display={'flex'} justifyContent={'end'} alignItems={'center'}>
                                        <Button variant="text" 
                                            style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                                            onClick={() => {
                                                goNext();
                                            }}>
                                            Next <NavigateNextIcon/>
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