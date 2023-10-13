import React, { useState, useEffect } from "react";
import Page from "../common/Page";
import { Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const Criteria = (props) => {

    const navigate = useNavigate();
    const {state} = useLocation();
    const [initialized, setInitialized] = useState(false);
    const [operands, setOperands] = useState(2);
    const [digitsPerOperand, setDigitsPerOperand] = useState([]);
    const [problemSetRequest, setProblemSetRequest] = useState({});
    const [url, setUrl] = useState("/arithmetic/addition"); // '/[subject]/[topic]' <- add logic with useLocation hook

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
            fetch("http://localhost:8080" + url, {
                method: 'POST',
                headers: {
                    'Origin': 'http://localhost',
                    'Access-Control-Request-Method': 'POST',
                    'Access-Control-Request-Headers': 'Content-Type',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(problemSetRequest)
            })
            .then((res) => {
                console.log(res);
                if(!res.ok)
                    throw new Error('network error');
                return res.json();
            }).then((data) => {
                console.log("data: " + JSON.stringify(data));
                navigate(navigation, {state: {problems: data.problems}});
            }).catch((err) => {
                console.log(err);
            });
        }
    }, [problemSetRequest]);

    useEffect(() => {
        if(!initialized){
            setInitialized(true);
        }
    }, [initialized])

    return (
        <Page>
            <>CRITERIA</>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ width: "80%"}}>
                <Grid xs={12} 
                    display="flex" 
                    justifyContent="left" 
                    alignItems="center" 
                    sx={{fontSize: "1.5em", margin: "1em 0 0 0"}}>
                    <div 
                        className="breadcrumb"
                        onClick={() => navigate(-1)}>
                            {'< Arithmetic < Addition'}
                    </div>
                </Grid>
                <Grid xs={12} display="flex" 
                    justifyContent="left" 
                    alignItems="center" >
                    <h2>Criteria</h2>
                </Grid>
                <Grid xs={4} display="flex"
                    justifyContent="center"
                    alignItems="center">
                     <FormControl fullWidth>
                        <InputLabel id="select-operands-label">Operands</InputLabel>
                        <Select
                        labelId="operands-select-label"
                        id="operands-select"
                        value={operands}
                        label="Operands"
                        onChange={(event) => {setOperands(event.target.value)}}
                        >
                            <MenuItem value={1}>1</MenuItem>
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
                    <Grid xs={12} key={index}>
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