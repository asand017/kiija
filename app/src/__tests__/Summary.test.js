import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Summary from '../components/screens/Summary';

test('renders Summary page with performance data', () => {
    render(<BrowserRouter>
        <Summary topic={'multiplication'} summary={{totalAnswered: 20, totalCorrect: 18, totalIncorrect: 2}}/>
    </BrowserRouter>)

    const summaryTitle = screen.getByText('Topic: multiplication');
    const summaryAnswered = screen.getByText('Answered: 20');
    const summaryCorrect = screen.getByText('Correct: 18');
    const summaryIncorrect = screen.getByText('Incorrect: 2');

    expect(summaryTitle).toBeInTheDocument();
    expect(summaryAnswered).toBeInTheDocument();
    expect(summaryCorrect).toBeInTheDocument();
    expect(summaryIncorrect).toBeInTheDocument();
})