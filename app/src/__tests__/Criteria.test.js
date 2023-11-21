import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Criteria from '../components/screens/Criteria';

test('renders Criteria title', () => {
    render(<BrowserRouter>
        <Criteria/>
    </BrowserRouter>);

    const criteriaTitle = screen.getByText('Criteria');

    expect(criteriaTitle).toBeInTheDocument();
})

test('user can set operand count', () => {
    render(<BrowserRouter>
        <Criteria operands={3}/>
    </BrowserRouter>);

    const operandsDigitOptions = screen.getAllByTestId('operands-digits-container');

    expect(operandsDigitOptions).toHaveLength(3);
})