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

    return (
        <Box sx={styles.container}>
            <Header/>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ width: "80%"}}>
                <Grid xs={12} 
                    display="flex" 
                    justifyContent="left" 
                    alignItems="center" 
                    sx={{fontSize: "1.5em", margin: "1em 1em"}}>
                    <div 
                        className="breadcrumb"
                        onClick={() => navigate(-1)}>
                            {'< Arithmetic'}
                        </div>
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