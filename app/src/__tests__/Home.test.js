import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders the Home screen title', () => {
    const headerTitle = 'Are You Ready to Become a Math God?';
    
    const {getByText} = render(<App/>);
    const homeTitle = getByText(headerTitle);

    expect(homeTitle).toBeInTheDocument();
})