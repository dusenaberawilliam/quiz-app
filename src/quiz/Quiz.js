import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuizContext } from '../helpers/Contexts'
import { Questions } from '../helpers/QuestionBank'
import Tree from '../share/Tree'
import './Quiz.css'

const Quiz = () => {

    const [currQuetion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const { score, setScore } = useContext(QuizContext)

    let navigate = useNavigate();

    const nextQuestion = () => {
        if (Questions[currQuetion].answer === optionChosen) {
            setScore(score + 2);
        }
        setCurrQuestion(currQuetion + 1)
    }


    const endQuiz = () => {
        if (Questions[currQuetion].answer === optionChosen) {
            setScore(score + 2);
        }
        navigate("/result")
    }


    return (
        <div className="quiz">
            <div className="quiz__left">
                <Tree p1={<p>1</p>} p2={<p>2</p>} p3={<p>3</p>} p4={<p>4</p>} p5={<p>5</p>} />
            </div>
            <div className="quiz__right">
                <div className="mb-4">
                    <h2>{Questions[currQuetion].prompt}</h2>
                </div>
                <div className="flex ml-8 p-2">
                    <input value="A" type="radio" name="q1" onChange={(event) => setOptionChosen(event.target.value)} />
                    <p className="ml-2">{Questions[currQuetion].optionA}</p>
                </div>
                <div className="flex ml-8 p-2">
                    <input value="B" type="radio" name="q1" onChange={(event) => setOptionChosen(event.target.value)} />
                    <p className="ml-2">{Questions[currQuetion].optionB}</p>
                </div>
                <div className="flex ml-8 p-2">
                    <input value="C" type="radio" name="q1" onChange={(event) => setOptionChosen(event.target.value)} />
                    <p className="ml-2">{Questions[currQuetion].optionC}</p>
                </div>
                <div className="flex ml-8 p-2">
                    <input value="D" type="radio" name="q1" onChange={(event) => setOptionChosen(event.target.value)} />
                    <p className="ml-2">{Questions[currQuetion].optionD}</p>
                </div>
                <div className="flex ml-8 p-2">
                    <input value="E" type="radio" name="q1" onChange={(event) => setOptionChosen(event.target.value)} />
                    <p className="ml-2">{Questions[currQuetion].optionE}</p>
                </div>

                {
                    currQuetion === Questions.length - 1 ? (
                        <button onClick={endQuiz} >FINISH</button>
                    ) : (
                        <button onClick={nextQuestion} >NEXT</button>
                    )
                }

            </div>
        </div>
    )
}

export default Quiz
