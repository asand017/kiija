import React from "react";
import Header from "../../common/Header";
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Panel from '../../common/Panel';
import { ADDITION, SUBTRACTION, styles } from "../../common/Constants";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from "react-router-dom";

const Arithmetic = () => {

    const navigate = useNavigate();
    const concepts = [
        {
            concept: 'Addition',
            styles: [styles.gridItem, styles.red],
            link: ADDITION,
            symbol: <AddIcon sx={{scale: '2'}}/>
        },
        {
            concept: 'Subtraction',
            styles: [styles.gridItem, styles.blue],
            link: SUBTRACTION,
            symbol: <RemoveIcon sx={{scale: '2'}}/>
        }
    ];

    const goBack = () => {
        navigate(-1);
    };

    return (
        <Box sx={styles.container}>
            <Header/>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={12} 
                    display="flex" 
                    justifyContent="left" 
                    alignItems="center" 
                    sx={{fontSize: "2em", margin: "1em 0.5em"}}>
                    <div onClick={goBack}> {'< Arithmetic'} </div>
                </Grid>
                {concepts.map((item, index) => (
                    <Grid key={index} xs={6} display="flex" justifyContent="center" alignItems="center">
                        <Panel 
                            title={item.concept} 
                            elevation={2} 
                            styles={item.styles} 
                            navigationLink={item.link}
                            symbol={item.symbol}/>
                    </Grid>
                ))}
        </Grid>
    </Box>
        
    )
}

export default Arithmetic;