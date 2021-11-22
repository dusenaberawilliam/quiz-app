import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../share/navigation/Navbar'
import About from './About'
import ContactUs from './ContactUs'
import Instructions from './Instructions'

const LandingPages = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <div class="navbar">
                <h2>Quiz Application</h2>
                <div className="">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#abouts">About</a></li>
                            <li><a href="#contacts">Contact us</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Instructions />
            <div id="abouts" className="pt-8">
                <About />
            </div>
            <div id="contacts">
                <ContactUs />
            </div>

        </div>
    )
}

export default LandingPages
