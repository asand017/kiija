import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Panel from './common/Panel';
import { ALEGBRA, ARITHMETIC } from './common/Constants';

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
            link: ARITHMETIC
        },
        {
            topic: 'Alegbra',
            styles: [styles.gridItem, styles.blue],
            link: ALEGBRA
        }
    ];

    return (
        <Box sx={styles.container}>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={12} display="flex" justifyContent="center" alignItems="center" sx={{fontSize: "2em"}}>
                    <h2>Pick a Topic</h2>
                </Grid>
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
}

export default TopicNavigator;