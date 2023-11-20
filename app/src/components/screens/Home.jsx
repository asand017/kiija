import React from 'react';

import { useNavigate } from "react-router-dom";
import Page from '../common/Page';
import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { SUBJECTS, styles } from '../common/Constants';

const Home = () => {
    const navigate = useNavigate();
    return (
      <Page>
        {/* TODO: Add User Sign Up/Login flow */}
        <Grid container sx={{height: '400px', display: 'flex'}}>
          <Grid display="flex" justifyContent="center" alignItems="center" xs={12} sx={{fontSize: '1em'}}>
            <h1>hello.</h1>
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="start" xs={12}>
            <Button variant='contained' size="large"
              onClick={() => {
                navigate(SUBJECTS);
              }}>
                Enter
              </Button>
          </Grid>
        </Grid>
      </Page>
    );
}

export default Home;