import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Typography, Box, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Panel from './common/Panel';

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

    const topics = [
        {
            topic: 'Arithmetic',
            styles: [styles.gridItem, styles.red],
            link: '/arthimetic'
        },
        {
            topic: 'Alegbra',
            styles: [styles.gridItem, styles.blue],
            link: '/alegbra'
        }
    ];

    return (
        <Box sx={styles.container}>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    topics.map((item, index) => (
                        <Grid key={index} xs={6} display="flex" justifyContent="center" alignItems="center">
                            <Panel 
                                title={item.topic} 
                                elevation={2} 
                                styles={item.styles} 
                                navigationLink={item.link}/>
                        </Grid>
                        
                    ))
                }
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