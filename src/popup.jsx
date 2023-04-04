// Imports
import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import './popup.css'

// Components
import Header from './components/Header.jsx'

// Variables
const container = document.getElementById('app')

// Main React App for extension
function App () {
    return(
        <>
            <Header />
        </>
    )
}

// Create a root.
const root = ReactDOMClient.createRoot(container)

// Initial render: Render an element to the root.
root.render(<App />)