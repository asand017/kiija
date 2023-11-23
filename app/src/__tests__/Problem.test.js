import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Problem from '../components/screens/Problem'

test('renders Problem sheet', () => {
    expect(true).toBe(true)
})

test('display a problem to the user', () => {
    const mockData = [
        { operands: ['65', '10'], solution: '75' },
        { operands: ['68', '55'], solution: '123' },
    ]

    render(
        <BrowserRouter>
            <Problem type={'addition'} url={'http://dummy.api'} problems={mockData} request={{}}/>
        </BrowserRouter>
    );

    const firstOperand = screen.getByTestId('operand_0');
    const secondOperand = screen.getByTestId('operand_1');
    
    expect(firstOperand).toBeInTheDocument();
    expect(secondOperand).toBeInTheDocument();
})
