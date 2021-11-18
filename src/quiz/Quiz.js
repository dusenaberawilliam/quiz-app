import React from 'react'
import { Link } from 'react-router-dom'
import Tree from '../share/Tree'
import './Quiz.css'

const Quiz = () => {
    return (
        <div className="quiz">
            <div className="quiz__left">
                <Tree p1={<p>1</p>} p2={<p>2</p>} p3={<p>3</p>} p4={<p>4</p>} p5={<p>5</p>} />
            </div>
            <div className="quiz__right">
                <div className="mb-4">
                    <h2>Q1. What is the most popular programming langugaes</h2>
                </div>
                <div className="flex ml-8 p-2">
                    <input type="radio" name="q1" />
                    <p className="ml-2">JavaScript</p>
                </div>
                <div className="flex ml-8 p-2">
                    <input type="radio" name="q1" />
                    <p className="ml-2">Java</p>
                </div>
                <div className="flex ml-8 p-2">
                    <input type="radio" name="q1" />
                    <p className="ml-2">Python</p>
                </div>
                <div className="flex ml-8 p-2">
                    <input type="radio" name="q1" />
                    <p className="ml-2">PHP</p>
                </div>
                <div className="flex ml-8 p-2">
                    <input type="radio" name="q1" />
                    <p className="ml-2">Ruby</p>
                </div>
                <Link to="/quiz" >
                    <button>NEXT</button>
                </Link>
            </div>
        </div>
    )
}

export default Quiz
