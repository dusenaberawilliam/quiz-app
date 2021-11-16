import React from 'react'
import { Link } from 'react-router-dom'


import './Instructions.css'
import instr from '../assets/instr.JPG'
import Tree from '../share/Tree'

const Instructions = () => {
    return (
        <div className="instruction__body">
            <div className="instruction__text">
                <div className="instruction__title">
                    <h2>Instructions</h2>
                </div>
                <div className="instruction__p">
                    <Tree p1={<p>Arrive at the quiz platform at least 15 minutes before quiz the start</p>} p2={<p>Be aware that the quiz is on counting down</p>} p3={<p>If you experience technical problems during the quiz, you must immediately contact one of the invigilators.</p>} p4={<p>Attempt all question</p>} p5={<p>Thank you</p>} />


                </div>
                <div className="instruction__get-started">
                    <Link to="">GET STARTED</Link>
                </div>

            </div>
            <div className="instruction__img">
                <img src={instr} alt="" />
            </div>
        </div>
    )
}

export default Instructions
