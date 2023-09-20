import React from "react";
import Header from "../../../common/Header";
import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { PRACTICEPAD, styles } from "../../../common/Constants";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";

const AdditionModule = (props) => {

    const navigate = useNavigate();
    const [operands, setOperands] = React.useState(2);
    //const url = "/arithmetic/addition";

    const handleChange = (event) => {
        setOperands(event.target.value);
    }

    const navToPracticeArea = (navigation) => {
        navigate(navigation);
    }

    return (
        <Box sx={styles.container}>
            <Header/>
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
                        onChange={handleChange}
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
                {Array.from({length: operands}, (_, index) => (
                    <Grid xs={12} key={index}>
                        <FormControl sx={{width: "30%"}}>
                        <InputLabel id={"select-digit-count-"+index+"-label"}># of operand {index} digits</InputLabel>
                        <Select
                        labelId={"select-digit-count-"+index+"-label"}
                        id={"select-digit-count-"+index}
                        value={operands}
                        label={"# of operand "+index+" digits"}
                        onChange={handleChange}
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
                    <Button variant="contained" onClick={() => {navToPracticeArea(PRACTICEPAD)}}>Start Practicing</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AdditionModule;