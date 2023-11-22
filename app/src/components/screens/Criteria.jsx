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

const Criteria = (props) => {

    const navigate = useNavigate();
    const defaultDigits = 2; // default operands to 2
    const {state} = useLocation();
    const [initialized, setInitialized] = useState(false);
    const [operands, setOperands] = useState(props.operands || defaultDigits);
    const [digitsPerOperand, setDigitsPerOperand] = useState(Array.from({ length: operands }, () => 2));
    const url = process.env.REACT_APP_BASE_URL + state?.navLink || '';

    useEffect(() => {
        if(!initialized){
            setInitialized(true);
        }
    }, [initialized])

    const configDigits = (operands) => {
        const digits = []
        for(let i = 0; i < operands; i++){
            if(i < digitsPerOperand.length){
                digits.push(digitsPerOperand[i]);
            }else{
                digits.push(defaultDigits);
            }
        }
        setDigitsPerOperand(digits);
    }

    const configOperandDigits = (value, index) => {
        const operandsDigits = [];
        for(let i = 0; i < operands; i++){
            if(i === index){
                operandsDigits.push(value);
            }else{
                operandsDigits.push(digitsPerOperand[i]);
            }
        }
        setDigitsPerOperand(operandsDigits);
    }

    const startPracticing = () => {
        if(initialized){
            var req = {
                numOfOperands: operands,
                operandDigits: digitsPerOperand,
                type: "integer"
            };
            fetchProblemSet(req);
        }
        
    }

    const fetchProblemSet = async (request) => {
        try {
            const problemSet = await ApiService.fetchData(url, {
                method: 'POST',
                body: JSON.stringify(request)
            })
            navigate(PROBLEMSET, {
                state: {
                    type: state.title, 
                    problems: problemSet.problems, 
                    apiUrl: url,
                    request: request
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Page showBreadcrumbs={true}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ width: globalWidth}} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Grid xs={12} display="flex" 
                    justifyContent="center" 
                    alignItems="center">
                    <h2>Criteria</h2>
                </Grid>
                <Grid xs={12} display="flex" justifyContent="center" alignItems="center">
                     <FormControl sx={{width: "30%"}}>
                        <InputLabel id="operands-select-label">Operands</InputLabel>
                        <Select
                        data-testid="operand-select-element"
                        labelId="operands-select-label"
                        id="operands-select"
                        value={operands}
                        label="Operands"
                        onChange={(event) => {
                            const op = event.target.value;
                            setOperands(op);
                            configDigits(op); 
                        }}>
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
                    <Grid data-testid={'operands-digits-container'} xs={12} key={index} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <FormControl sx={{width: "30%"}}>
                            <InputLabel id={"select-digit-count-"+index+"-label"}> Operand #{index} digits</InputLabel>
                            <Select
                            labelId={"select-digit-count-"+index+"-label"}
                            id={"select-digit-count-"+index}
                            value={digits}
                            label={"# of operand "+index+" digits"}
                            onChange={(event) => {
                                configOperandDigits(event.target.value, index);
                            }}>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
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