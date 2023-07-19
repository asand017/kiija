import { Paper, Typography } from '@mui/material';

const Panel = (props) => {
    const elevation = props?.elevation || 2;
    const styles = props?.styles || [];
    const title = props?.title || 'TBD';

    const actionOnClick = (navigation) => {
        console.log("navigation link: " + navigation);
    }

    return(
        <Paper elevation={elevation} sx={styles} onClick={actionOnClick(props.navigationLink)}>
            <Typography variant="h3" className='topic-header'>
                {title}
            </Typography>
        </Paper>
    );
}

export default Panel;