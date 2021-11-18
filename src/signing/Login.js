import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login">
            <div className="login__left">
                <h2>Log in to start a quiz</h2>
            </div>
            <div className="login__right">
                <form action="">
                    <input placeholder="Email or Username" type="text" />
                    <br />
                    <input placeholder="Password" type="password" />
                    <br />
                    <Link to="/quiz" >
                        <button>LOGIN</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login
