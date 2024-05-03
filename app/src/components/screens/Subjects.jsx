import React, { useEffect, useState } from 'react'
import Page from '../common/Page'
import Grid from '@mui/material/Unstable_Grid2'
import Panel from '../common/Panel'

const Subjects = (props) => {
    const [subjects, setSubjects] = useState(props.subjects || [])

    // TODO: refactor with api util call
    const getSubjects = () => {
        fetch('http://localhost:8080/subjects', {
            method: 'GET',
            headers: {
                Origin: 'http://localhost',
                'Access-Control-Request-Method': 'GET',
                'Access-Control-Request-Headers': 'Content-Type',
            },
        })
            .then((res) => {
                console.log(res)
                if (!res.ok) throw new Error('network error')
                return res.json()
            })
            .then((data) => {
                console.log(JSON.stringify(data?.subjects))
                setSubjects(data?.subjects)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getSubjects()
    }, [])

    return (
        <Page>
            <Grid container rowSpacing={2}>
                <Grid
                    xs={12}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ fontSize: '2em' }}
                >
                    <h2>Pick a Subject</h2>
                </Grid>
                {subjects.map((item, index) => (
                    <Grid
                        data-testid={'subjects-container'}
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
                                '/subjects/' + item.name.toLowerCase()
                            }
                            data={item?.topics}
                        />
                    </Grid>
                ))}
            </Grid>
        </Page>
    )
}

export default Subjects
