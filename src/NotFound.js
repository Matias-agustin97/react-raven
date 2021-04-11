import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            <h2>Sorry m8, didn't find that page</h2>
            <Link to='/'>Go to home</Link>
        </div>
    )
}
