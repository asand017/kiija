import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Summary from '../components/screens/Summary'

test('renders Summary page with performance data', () => {
    render(
        <BrowserRouter>
            <Summary
                topic={'multiplication'}
                summary={{
                    totalAnswered: 20,
                    totalSkipped: 4,
                    totalCorrect: 14,
                    totalIncorrect: 2,
                }}
            />
        </BrowserRouter>
    )

    const summaryTitle = screen.getByText('Topic: multiplication')
    const summaryAnswered = screen.getByText('Answered: 20')
    const summarySkipped = screen.getByText('Skipped: 4')
    const summaryCorrect = screen.getByText('Correct: 14')
    const summaryIncorrect = screen.getByText('Incorrect: 2')

    expect(summaryTitle).toBeInTheDocument()
    expect(summaryAnswered).toBeInTheDocument()
    expect(summarySkipped).toBeInTheDocument()
    expect(summaryCorrect).toBeInTheDocument()
    expect(summaryIncorrect).toBeInTheDocument()
})
