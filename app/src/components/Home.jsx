import React from 'react';

import TopicNavigator from './TopicNavigator';
import { Box } from '@mui/material';
import Header from './common/Header';

const Home = () => {
    return (
      <>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Header/>
          <TopicNavigator/>
        </Box>
      </>
    );
}

export default Home;