import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Topics from '../components/screens/Topics'

test('renders Topics title', () => {
    render(
        <BrowserRouter>
            <Topics />
        </BrowserRouter>
    )

    const topicsTitle = screen.getByText('Pick a Topic')

    expect(topicsTitle).toBeInTheDocument()
})

test('render topics', () => {
    const mockData = [
        {
            name: 'Addition',
            id: 1,
        },
        {
            name: 'Subtraction',
            id: 2,
        },
    ]

    render(
        <BrowserRouter>
            <Topics title={'addition'} topics={mockData} />
        </BrowserRouter>
    )

    const topics = screen.getAllByTestId('topics-container')

    expect(topics).toHaveLength(2)
})
