import React from "react";
import Page from "../common/Page";
import Grid from '@mui/material/Unstable_Grid2';
import Panel from '../common/Panel';

const Topics = (props) => {
    const topics = props?.topics || [];

    return(
        <Page>
            <Grid container rowSpacing={2}>
                <Grid xs={12} display="flex" justifyContent="center" alignItems="center" sx={{fontSize: "2em"}}>
                    <h2>Pick a Topic</h2>
                </Grid>
                {topics.map((item, index) => (
                    <Grid key={index} xs={12} display="flex" justifyContent="center" alignItems="center">
                        <Panel 
                            title={item.name} 
                            elevation={2} 
                            navigationLink={"/subjects/"+item?.name.toLowerCase()}/>
                    </Grid>
                ))}
              
            </Grid>
        </Page>
    )
}

export default Topics;