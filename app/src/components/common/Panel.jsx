import { Paper, Typography, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import React from 'react';

const Panel = (props) => {
    const elevation = props?.elevation || 2;
    const styles = props?.styles || [];
    const title = props?.title || 'TBD';
    const navigate = useNavigate();

    const actionOnClick = (navigation) => {
        console.log("navigation link: " + navigation);
        navigate(navigation)
    }

    return(
        <Button variant="contained" sx={styles} onClick={() => (actionOnClick(props.navigationLink))}>
            <Typography variant="h3" className='topic-header'>
                {title}
            </Typography>
        </Button>
        
    );
}

export default Panel;