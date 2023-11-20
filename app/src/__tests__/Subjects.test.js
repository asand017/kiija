import React from 'react';
import { render, screen } from '@testing-library/react';
import Subjects from '../components/screens/Subjects';
import { BrowserRouter } from 'react-router-dom';

test('renders Subjects title', () => {
    render(<BrowserRouter>
        <Subjects/>
    </BrowserRouter>);
    
    const subjectTitle = screen.getByText('Pick a Subject');

    expect(subjectTitle).toBeInTheDocument();
})

test('renders subjects', () => {
    const mockData = [
        {
            "name":"Algebra",
            "id":2,
            "topics":[]
        },
        {
            "name":"Arithmetic",
            "id":1,
            "topics":[
                {
                    "name":"Addition",
                    "id":1
                },
                {
                    "name":"Subtraction",
                    "id":2
                }
            ]
        }
    ];

    render(<BrowserRouter>
        <Subjects subjects={mockData}/>
    </BrowserRouter>);
        
    const subjects = screen.getAllByTestId('subjects-container');

    expect(subjects).toHaveLength(2);
})