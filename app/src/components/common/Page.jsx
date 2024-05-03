import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Header from './Header'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { styles, globalWidth } from './Constants'

const Page = (props) => {
    const navigate = useNavigate()
    const showBreadcrumbs = props?.showBreadcrumbs

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <Header />
            {showBreadcrumbs && (
                <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    sx={{ width: globalWidth }}
                >
                    <Grid
                        xs={6}
                        display="flex"
                        justifyContent="start"
                        alignItems="center"
                        sx={{ fontSize: '1em' }}
                    >
                        <div
                            className="breadcrumb"
                            onClick={() => navigate(-1)}
                            style={styles.flex_centered}
                        >
                            <ArrowBackIcon /> Go Back
                        </div>
                    </Grid>
                </Grid>
            )}
            {props.children}
        </Box>
    )
}

export default Page
