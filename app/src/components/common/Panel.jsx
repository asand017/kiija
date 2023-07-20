import { Typography, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from "react-router-dom";
import React from 'react';

const Panel = (props) => {
    const styles = props?.styles || [];
    const title = props?.title || 'TBD';
    const navigate = useNavigate();

    const actionOnClick = (navigation) => {
        console.log("navigation link: " + navigation);
        navigate(navigation)
    }

    return(
        <Button variant="contained" sx={styles} 
            onClick={() => (actionOnClick(props.navigationLink))}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Typography variant="h3" className='topic-header'>
                        {title}
                    </Typography>
                </Grid>
                <Grid xs={12}>
                    {props.symbol}
                </Grid>
            </Grid>
        </Button>
        
    );
}

export default Panel;