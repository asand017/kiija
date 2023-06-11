import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

test('renders the Home screen title', () => {
    const headerTitle = 'Are You Ready to Become a Math God?';
    
    const { getByText } = render(<Home title={headerTitle}/>);
    const homeTitle = getByText(headerTitle);

    expect(homeTitle).toBeInTheDocument();
})