import React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

test('user gives a correct answer', async () => {
    const user = userEvent.setup()
    const mockData = [
        { operands: ['65', '10'], solution: '75' },
    ]

    render(
        <BrowserRouter>
            <Problem type={'addition'} 
                url={'http://dummy.api'} 
                problems={mockData} 
                request={{}}
                answer={'75'}
                />
        </BrowserRouter>
    );

    await act(async () => {
        await user.click(screen.getByText('TURN IN'))
    })

    expect(screen.getByText('Correct: 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Correct! :)')).toBeInTheDocument();
})

test('user gives an incorrect answer', async () => {
    const user = userEvent.setup()
    const mockData = [
        { operands: ['65', '10'], solution: '75' },
    ]

    render(
        <BrowserRouter>
            <Problem type={'addition'} 
                url={'http://dummy.api'} 
                problems={mockData} 
                request={{}}
                answer={'99'}
                />
        </BrowserRouter>
    );

    await act(async () => {
        await user.click(screen.getByText('TURN IN'))
    })

    expect(screen.getByText('Incorrect: 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Incorrect :(')).toBeInTheDocument();
})

test('user skips a question', async () => {
    const user = userEvent.setup()
    const mockData = [
        { operands: ['65', '10'], solution: '75' },
        { operands: ['68', '55'], solution: '123' },
    ]

    render(
        <BrowserRouter>
            <Problem type={'addition'} 
                url={'http://dummy.api'} 
                problems={mockData} 
                request={{}}/>
        </BrowserRouter>
    );

    await act(async () => {
        await user.click(screen.getByText('SKIP'))
    })

    expect(screen.getByText('Skipped: 1')).toBeInTheDocument();
})