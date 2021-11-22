import React, { useContext } from 'react'
import TreeResult from '../share/TreeResult'
import DoneIcon from '@mui/icons-material/Done';
import Profile from '../assets/onlineQuiz.jpg'
import { Link } from 'react-router-dom';
import Navbar from '../share/navigation/Navbar'
import { Questions } from '../helpers/QuestionBank';
import './Results.css'
import { QuizContext } from '../helpers/Contexts';

const Results = (props) => {

    const { score, setScore } = useContext(QuizContext)
    // const setSizer = 384 * score / 10;

    return (
        <>
            <Navbar />

            <div className="result flex">
                <div className="result__left">
                    <TreeResult q1={<h2>Q1. {Questions[0].prompt}</h2>} q2={<h2>Q2. {Questions[1].prompt}</h2>} q3={<h2>Q3. {Questions[2].prompt}</h2>} q4={<h2>Q4. {Questions[3].prompt}</h2>} q5={<h2>Q5. {Questions[4].prompt}</h2>} ans1={<p className="flex justify-between"><p>Ans</p> <p>{Questions[0].answer}</p> <p>...</p>   <DoneIcon /></p>} />
                </div>
                <div className="result__right ml-8 mt-12">
                    <h1 className="text-center font-bold bg-gray-200 ml-24 mr-24">USER</h1>
                    <div className="ml-24 mt-8 flex">
                        <img src={Profile} alt="" className="  h-16 w-16" />
                        <div className="ml-8">
                            <p><b>ID: </b> 21061</p>
                            <p><b>First name: </b> William</p>
                            <p><b>Last name: </b> Pro</p>
                        </div>
                    </div>
                    <hr className="mt-4 mb-4" />
                    <div className="">
                        <h1 className="text-center font-bold">GRADE</h1>
                        <div className=" mt-8 h-4 w-96 ml-24 rounded bg-white ">
                            <div style={{ width: "307px" }} className="h-4 bg-yellow-400 rounded"></div>
                            {/* <div style={{ width: `${setSizer}` }} className="h-4 bg-yellow-400 rounded"></div> */}
                        </div>
                        <div ><h1 className="mt-8 text-center text-4xl">{score}/10</h1></div>
                    </div>
                    <div>
                        <Link to="/quiz" >
                            <button>RE-ATTEMPT</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Results
