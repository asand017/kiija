import React from "react";
import { useLocation } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import Page from "../common/Page"

const Summary = (props) => {

    //const navigate = useNavigate();
    const {state} = useLocation();
    const summary = props.summary || state.summary;
    const topic = props.topic || state.topic;

    return(
        <Page>
            <Grid container>
                <Grid xs={12}>
                    <div>Topic: {topic}</div>
                </Grid>
                <Grid xs={12}>
                    <div>Answered: {summary.totalAnswered}</div>
                </Grid>
                <Grid xs={12}>
                    <div>Skipped: {summary.totalSkipped}</div>
                </Grid>
                <Grid xs={12}>
                    <div>Correct: {summary.totalCorrect}</div>
                </Grid>
                <Grid xs={12}>
                    <div>Incorrect: {summary.totalIncorrect}</div>
                </Grid>
            </Grid>
        </Page>
    )
}

export default Summary;