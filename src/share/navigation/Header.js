import React from 'react'
import Logo from '../../assets/quizlogo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={Logo} alt="Quiz App" />
            </div>
            <div className="header__info">
                <h3>Kigali Rwanda</h3>
                <h3>info@gmail.com</h3>
                <h3>+250784445272</h3>
            </div>
        </div>
    )
}

export default Header
