import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <div>
            <h1>Đây là Header</h1>
            <Link to="/">Home</Link>
            <Link to="/courses/frontend">Courses Frontend</Link>
            <Link to="/course/bootstrap">Course Bootstrap</Link>
        </div>
    )
}
