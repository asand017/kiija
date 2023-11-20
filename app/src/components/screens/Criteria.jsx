import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Page from "../common/Page";
import { Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { PROBLEMSET, globalWidth } from "../common/Constants";
import ApiService from "../../utils/ApiService";

//TODO: Something is very wrong with the form
const Criteria = (props) => {

    const navigate = useNavigate();
    const {state} = useLocation();
    const [initialized, setInitialized] = useState(false);
    const [operands, setOperands] = useState(2);
    const [digitsPerOperand, setDigitsPerOperand] = useState([]);
    const [problemSetRequest, setProblemSetRequest] = useState({});
    const [url, setUrl] = useState(state?.navLink || '');

    // useEffect(() => {
    //     console.log(url);
    // }, []);

    const setOperandDigits = (value, index) => {
        console.log("set " + index + " operand digits: " + value);
        setOperands(value);
    }

    const startPracticing = () => {
        var req = {
            numOfOperands: operands,
            operandDigits: digitsPerOperand,
            type: "integer"
        };
        console.log("set request: " + JSON.stringify(req));
        setProblemSetRequest(req);
    }

    useEffect(() => {
        let digits = [];
        for(let i = 0; i < operands; i++){
            digits.push(2);
        }
        setDigitsPerOperand(digits);
    }, [operands]);

    useEffect(() => {
        if(initialized) {
            const fullUrl = "http://localhost:8080" + url;
            const fetchProblemSet = async () => {
                try {
                    const problemSet = await ApiService.fetchData(fullUrl, {
                        method: 'POST',
                        body: JSON.stringify(problemSetRequest)
                    })
                    console.log("problemSet: " + JSON.stringify(problemSet));
                    console.log(state.title);
                    navigate(PROBLEMSET, {
                        state: {
                            type: state.title, 
                            problems: problemSet.problems, 
                            apiUrl: fullUrl, 
                            request: problemSetRequest
                        }
                    });
                } catch (error) {
                    console.log(error);
                }
            };
            
            fetchProblemSet();
        }
    }, [problemSetRequest]);

    useEffect(() => {
        if(!initialized){
            setInitialized(true);
        }
    }, [initialized])

    return (
        <Page showBreadcrumbs={true}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ width: globalWidth}} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Grid xs={12} display="flex" 
                    justifyContent="center" 
                    alignItems="center" >
                    <h2>Criteria</h2>
                </Grid>
                <Grid xs={12} display="flex" justifyContent="center" alignItems="center">
                     <FormControl sx={{width: "30%"}}>
                        <InputLabel id="select-operands-label">Operands</InputLabel>
                        <Select
                        labelId="operands-select-label"
                        id="operands-select"
                        value={operands}
                        label="Operands"
                        onChange={(event) => {setOperands(event.target.value)}}
                        >
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                {digitsPerOperand.map((digits, index) => (
                    <Grid xs={12} key={index} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <FormControl sx={{width: "30%"}}>
                            <InputLabel id={"select-digit-count-"+index+"-label"}># of operand {index} digits</InputLabel>
                            <Select
                            labelId={"select-digit-count-"+index+"-label"}
                            id={"select-digit-count-"+index}
                            value={digits}
                            label={"# of operand "+index+" digits"}
                            onChange={(event) => {
                                setOperandDigits(event.target.value, index);
                            }}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                ))}
                <Grid xs={12} display="flex" 
                    justifyContent="center" 
                    alignItems="center" > 
                    <Button variant="contained" onClick={() => {
                        startPracticing();
                    }}>Start Practicing</Button>
                </Grid>
            </Grid>
        </Page>
    )
}

export default Criteria;