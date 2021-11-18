import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div class="navbar">
            <h2>Quiz Application</h2>
            <div className="">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
