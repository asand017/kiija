import React from 'react';

import Header from './Header';
import { Box } from '@mui/material';

const Page = (props) => {

    return(
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Header/>
            {props.children}
        </Box>
    );
}

export default Page;