import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className="signup">

            <div className="signup__left">
                <form>
                    <input placeholder="Enter your Name" type="text" />
                    <br />
                    <input placeholder="Email or Username" type="text" />
                    <br />
                    <input placeholder="Password" type="password" />
                    <br />
                    <Link to="/quiz" >
                        <button>SIGNUP</button>
                    </Link>
                </form>
            </div>

            <div className="signup__right">
                <h2>Signing up</h2>
            </div>

        </div>
    )
}

export default SignUp
