import React from 'react'
import Page from '../common/Page'
import Grid from '@mui/material/Unstable_Grid2'
import Panel from '../common/Panel'
import { useLocation } from 'react-router-dom'

const Topics = (props) => {
    const { state } = useLocation()
    const title = props.title || state?.title
    const topics = props.topics || state?.data || []

    return (
        <Page showBreadcrumbs={true}>
            <Grid container rowSpacing={2}>
                <Grid
                    xs={12}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ fontSize: '2em' }}
                >
                    <h2>Pick a Topic</h2>
                </Grid>
                {topics.map((item, index) => (
                    <Grid
                        data-testid={'topics-container'}
                        key={index}
                        xs={12}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Panel
                            title={item.name}
                            elevation={2}
                            navigationLink={
                                '/subjects/' +
                                title.toLowerCase() +
                                '/' +
                                item?.name.toLowerCase()
                            }
                        />
                    </Grid>
                ))}
            </Grid>
        </Page>
    )
}

export default Topics
