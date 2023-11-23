import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

test('renders the Home screen title', () => {
    // Arrange
    const headerTitle = 'Kiija Math Wizard'
    const { getByText } = render(<App />)

    // Act
    const homeTitle = getByText(headerTitle)

    // Assert
    expect(homeTitle).toBeInTheDocument()
})
