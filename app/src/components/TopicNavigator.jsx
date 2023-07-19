import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Typography, Box, Button } from '@mui/material';
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
        textAlign: 'center',
        cursor: 'pointer',
    },
    red: {
        backgroundColor: '#86242A',
        color: 'white',
    },
    blue: {
        backgroundColor: '#5b759a',
        color: 'white'
    }
}

const TopicNavigator = () => {

    const navigateToArithmetic = () => {
        console.log('Go to Artihmetic topics');
    }

    const navigateToAlgebra = () => {
        console.log('Go to Algebra topics');
    }

    return (
        <Box sx={styles.container}>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={6} display="flex" justifyContent="center" alignItems="center">
                    <Paper elevation={2} sx={[styles.gridItem, styles.red]} onClick={navigateToArithmetic}>
                        <Typography variant="h3" className='topic-header'>
                            Arithmetic
                        </Typography>
                    </Paper>
                </Grid> 
                <Grid xs={6} display="flex" justifyContent="center" alignItems="center"> 
                    <Paper elevation={2} sx={[styles.gridItem, styles.blue]} onClick={navigateToAlgebra}>
                        <Typography variant="h3" className='topic-header'>
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