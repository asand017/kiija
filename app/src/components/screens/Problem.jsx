import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Grid from '@mui/material/Unstable_Grid2'
import Page from '../common/Page'
import { Button, Paper, TextField } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import AddIcon from '@mui/icons-material/Add' // '+'
import RemoveIcon from '@mui/icons-material/Remove'; // '-'
import { styles, SUMMARY } from '../common/Constants'
import DoorBackIcon from '@mui/icons-material/DoorBack'
import ApiService from '../../utils/ApiService'

const processProblemSet = (problemSet) => {
    let processed = []
    if (problemSet)
        processed = problemSet.map((item, index) => ({
            index: index,
            operands: item.operands,
            solution: item.solution,
        }))
    return processed
}

const Problem = (props) => {
    const navigate = useNavigate()
    const { state } = useLocation()
    const [problemSet, setProblemSet] = useState(
        processProblemSet(props?.problems || state.problems)
    ) // problem set state
    const [bufferSet, setBufferSet] = useState([]) // buffer for problems on deck
    const [currentProblem, setCurrentProblem] = useState(0) // problem set index of the current displayed problem
    const [answer, setAnswer] = useState('') // user input answer
    const [submitted, setSubmitted] = useState(false) // flag for first problem submission
    const [isCorrect, setIsCorrect] = useState(null) // decision flag if user answer for problem is correct
    const [numCorrect, setNumCorrect] = useState(0) // # of problems answered correctly on first attempt
    const [numIncorrect, setNumIncorrect] = useState(0) // # of problems answered incorrectly on first attempt
    const [numProblemsAttempted, setNumProblemsAttempted] = useState(0) // # of problems attempted in the session
    const [numSkipped, setNumSkipped] = useState(0)
    const [attempts, setAttempts] = useState(0) // # of attempts on the current problem
    const [summaryData, setSummaryData] = useState({}) // session summary object to be sent to Summary screen
    const count = problemSet.length // # problem set array size
    const type = props?.type || state.type
    const url = props?.url || state.apiUrl
    const problemSetRequest = props?.request || state.request

    const fetchMoreProblems = () => {
        const fetchProblemSet = async () => {
            try {
                const nextProblemSet = await ApiService.fetchData(url, {
                    method: 'POST',
                    body: JSON.stringify(problemSetRequest),
                })
                console.log(JSON.stringify(nextProblemSet.problems))
                setBufferSet(processProblemSet(nextProblemSet.problems))
            } catch (error) {
                console.log(error)
            }
        }
        fetchProblemSet()
    }

    const checkAnswer = (solution) => {
        if (Number(solution) === Number(answer)) {
            if (!submitted){
                setNumCorrect(numCorrect + 1)
                setNumProblemsAttempted(numProblemsAttempted + 1)
            }
            setIsCorrect(true)
        } else {
            if (!submitted){
                setNumIncorrect(numIncorrect + 1)
                setNumProblemsAttempted(numProblemsAttempted + 1)
            }
            setIsCorrect(false)
        }
        setSubmitted(true)
        setAttempts(attempts + 1)
    }

    const storeResult = useCallback(() => {
        setSummaryData({
            totalAnswered: numProblemsAttempted,
            totalSkipped: numSkipped,
            totalCorrect: numCorrect,
            totalIncorrect: numIncorrect,
        })
    }, [numProblemsAttempted, numSkipped, numCorrect, numIncorrect])

    const goNext = () => {
        setAnswer('')
        setAttempts(0)
        setIsCorrect(null)
        setSubmitted(false)
        if (currentProblem + 1 < count) {
            if (currentProblem > count - 3) {
                fetchMoreProblems()
            }
            setCurrentProblem(currentProblem + 1)
        } else {
            setProblemSet(bufferSet)
            setCurrentProblem(0)
        }
    }

    const checkIfAnswerGiven = () => {
        if (!answer) {
            setNumSkipped(numSkipped + 1)
        } else {
            setNumProblemsAttempted(numProblemsAttempted + 1)
        }
    }

    useEffect(() => {
        storeResult()
    }, [numSkipped, numProblemsAttempted, storeResult])

    return (
        <Page>
            <Paper variant="elevation" elevation={3} sx={{ marginTop: '12px' }}>
                {problemSet.map((item, index) => {
                    if (item.index === currentProblem) {
                        // TODO: add view slider to display in horizontal or vertical
                        return (
                            <Grid
                                container
                                key={item.index}
                                minHeight={320}
                                maxWidth={700}
                            >
                                <Grid
                                    key={item.index + '_title'}
                                    xs={12}
                                    sx={[styles.flex_centered]}
                                    container
                                >
                                    <Grid
                                        key={item.index + '_count'}
                                        xs={3}
                                        sx={{
                                            padding: '6px',
                                            alignSelf: 'flex-start',
                                        }}
                                    >
                                        <div>
                                            Answered: {numProblemsAttempted}
                                        </div>
                                        <div>Skipped: {numSkipped}</div>
                                        <div>Correct: {numCorrect}</div>
                                        <div>Incorrect: {numIncorrect}</div>
                                    </Grid>
                                    <Grid
                                        key={item.index + '_title_h2_container'}
                                        xs={6}
                                        sx={[styles.flex_centered]}
                                    >
                                        <h2 key={item.index + '_title_h2'}>
                                            {type}
                                        </h2>
                                    </Grid>
                                    <Grid
                                        key={item.index + '_attempts'}
                                        xs={3}
                                        sx={{
                                            padding: '6px',
                                            alignSelf: 'flex-start',
                                        }}
                                    >
                                        <div
                                            key={item.index + '_attempts_lable'}
                                            style={{ float: 'right' }}
                                        >
                                            Attempts: {attempts}
                                        </div>
                                    </Grid>{' '}
                                    {/* Filler cell */}
                                </Grid>
                                <Grid
                                    key={item.index + '_b'}
                                    container
                                    xs={12}
                                    sx={[styles.flex_centered]}
                                >
                                    {item.operands.map((operand, key) => {
                                        const includeOperator = key > 0
                                        return (
                                            <React.Fragment
                                                key={key + '_fragment'}
                                            >
                                                <Grid
                                                    key={key + '_a'}
                                                    xs={6}
                                                    display={'flex'}
                                                    justifyContent={'right'}
                                                    alignItems={'center'}
                                                >
                                                    {includeOperator && (type.toLowerCase() === 'addition' ? <AddIcon /> : <RemoveIcon/>)}
                                                </Grid>
                                                <Grid
                                                    data-testid={
                                                        'operand_' + key
                                                    }
                                                    key={key + '_b'}
                                                    xs={6}
                                                    display={'flex'}
                                                    justifyContent={'left'}
                                                    alignItems={'center'}
                                                    paddingLeft={3}
                                                    fontSize={'2em'}
                                                >
                                                    {operand}
                                                </Grid>
                                            </React.Fragment>
                                        )
                                    })}
                                    <Grid
                                        key={item.index + '_bar'}
                                        xs={12}
                                        sx={[styles.flex_centered]}
                                    >
                                        <div
                                            style={{
                                                width: '30%',
                                                height: '6px',
                                                backgroundColor: 'black',
                                                margin: '1em 0',
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    key={item.index + '_c'}
                                    xs={12}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    container
                                    sx={{ flexGrow: 1 }}
                                >
                                    <Grid xs={3}>
                                        <form
                                            autoComplete="off"
                                            style={styles.flex_centered}
                                        >
                                            <TextField
                                                error={
                                                    isCorrect !== null
                                                        ? isCorrect
                                                            ? false
                                                            : true
                                                        : false
                                                }
                                                //disabled={isCorrect}
                                                key={item.index + '_c_input'}
                                                id="outlined-basic"
                                                label={
                                                    isCorrect !== null
                                                        ? isCorrect
                                                            ? 'Correct'
                                                            : 'Incorrect'
                                                        : null
                                                }
                                                variant="outlined"
                                                type="number"
                                                size="small"
                                                color={
                                                    isCorrect !== null
                                                        ? isCorrect
                                                            ? 'success'
                                                            : 'error'
                                                        : 'primary'
                                                }
                                                value={answer}
                                                autoComplete="new-password"
                                                inputProps={{
                                                    autoComplete: 'off',
                                                }}
                                                autoFocus
                                                onChange={(event) => {
                                                    if(!isCorrect){
                                                        const val =
                                                            event.target.value
                                                        setAnswer(val)
                                                    }
                                                }}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        checkAnswer(
                                                            item.solution
                                                        )
                                                        e.preventDefault()
                                                    }
                                                }}
                                                sx={{
                                                    '& input:valid + fieldset':
                                                        {
                                                            borderColor:
                                                                isCorrect
                                                                    ? 'green'
                                                                    : 'rgba(0,0,0,0.64)',
                                                            borderWidth: 2,
                                                            color: 'green',
                                                        },
                                                    '& .MuiFormLabel-root': {
                                                        color:
                                                            isCorrect !== null
                                                                ? isCorrect
                                                                    ? 'green'
                                                                    : 'red'
                                                                : 'rgba(0,0,0,0.64)',
                                                    },
                                                }}
                                            />
                                        </form>
                                    </Grid>
                                </Grid>
                                <Grid
                                    key={item.index + '_d'}
                                    xs={12}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    container
                                    sx={{ flexGrow: 1, margin: '1em 0' }}
                                >
                                    <Grid
                                        xs={2}
                                        display={'flex'}
                                        justifyContent={'start'}
                                        alignItems={'center'}
                                    >
                                        <Button
                                            variant="text"
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                color: 'black',
                                            }}
                                            onClick={() => {
                                                checkIfAnswerGiven()
                                                navigate(SUMMARY, {
                                                    state: {
                                                        summary: summaryData,
                                                        topic: type,
                                                    },
                                                })
                                            }}
                                            startIcon={<DoorBackIcon />}
                                        >
                                            Finish
                                        </Button>
                                    </Grid>
                                    <Grid
                                        xs={8}
                                        display={'flex'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                    >
                                        {!isCorrect ? 
                                            <Button
                                                // disabled={isCorrect}
                                                color="primary"
                                                variant="outlined"
                                                onClick={() => {
                                                    checkAnswer(item.solution)
                                                }}
                                            >
                                                turn in
                                            </Button> : 
                                            <Button
                                                color="primary"
                                                variant="outlined"
                                                onClick={() => {
                                                    //checkIfAnswerGiven()
                                                    goNext()
                                                }}>
                                                Next
                                            </Button>
                                        }
                                    </Grid>
                                    <Grid
                                        xs={2}
                                        display={'flex'}
                                        justifyContent={'end'}
                                        alignItems={'center'}
                                    >
                                        <Button
                                            variant="text"
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                            onClick={() => {
                                                checkIfAnswerGiven()
                                                goNext()
                                            }}
                                        >
                                            Skip <NavigateNextIcon />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    } else {
                        return <div key={index}></div>
                    }
                })}
            </Paper>
        </Page>
    )
}

export default Problem
