import React from 'react';
import '../styles/global.css';
import TopicNavigator from './TopicNavigator';
import { Box } from '@mui/material';

const Home = () => {
    const title = "Kiija Math Wizard";

    return (
      <>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <h1 className="Title">{title}</h1>
          <TopicNavigator/>
        </Box>
      </>
    );
}

export default Home;