import React from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routing/Routes'

function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    )
}

export default App
