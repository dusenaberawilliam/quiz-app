import React from 'react'
import Login from '../signing/Login'
import About from './About'
import ContactUs from './ContactUs'
import Instructions from './Instructions'

const LandingPages = () => {
    return (
        <div>
            <Instructions />
            <About />
            <ContactUs />
        </div>
    )
}

export default LandingPages
