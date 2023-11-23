import { Typography, Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const Panel = (props) => {
    const styles = props?.styles || []
    const title = props?.title || 'TBD'
    const navigate = useNavigate()

    const actionOnClick = (navigation) => {
        navigate(navigation, {
            state: { data: props?.data, title: title, navLink: navigation },
        })
    }

    return (
        <Button
            variant="text"
            sx={styles}
            onClick={() => actionOnClick(props.navigationLink)}
        >
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Typography variant="h3" className="topic-header">
                        {title}
                    </Typography>
                </Grid>
            </Grid>
        </Button>
    )
}

export default Panel
