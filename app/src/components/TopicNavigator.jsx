import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const styles = {
    container: {
        flexGrow: 1,
        width: '100%',
    },
    gridItem: {
        width: '90%',
        padding: '2rem 0',  
        overflow: 'hidden', 
        whiteSpace: 'nowrap',
        textAlign: 'center'
    },
    red: {
        backgroundColor: 'red',
        color: 'white',
    },
    blue: {
        backgroundColor: 'blue',
        color: 'white'
    }
}

const TopicNavigator = () => {

    return (
        <Box sx={styles.container}>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={6} display="flex" justifyContent="center" alignItems="center"> 
                    <Paper elevation={2} sx={[styles.gridItem, styles.red]}>
                        <Typography variant="h6">
                            Arithmetic
                        </Typography>
                    </Paper>
                </Grid> 
                <Grid xs={6} display="flex" justifyContent="center" alignItems="center"> 
                    <Paper elevation={2} sx={[styles.gridItem, styles.blue]}>
                        <Typography variant="h6">
                            Algebra
                        </Typography>
                    </Paper>
                </Grid> 
            </Grid>
        </Box>
    );

    // return (
    //     <nav>
    //         <ul>
    //             <li>
    //                 <Link to="/">Home</Link>
    //             </li>
    //             <li>
    //                 <Link to="/addition">Addition</Link>
    //             </li>
    //             <li>
    //                 <Link to="/subtraction">Subtraction</Link>
    //             </li>
    //         </ul>
    //     </nav>
    // )
}

export default TopicNavigator;