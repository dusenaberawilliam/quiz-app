import React from 'react'
import onlineQuiz from '../assets/onlineQuiz.jpg'
import './About.css'

const About = () => {
    return (
        <section className="about__section">
            <h1>About Page</h1>
            <div className="about">

                <div className="about__img">
                    <img src={onlineQuiz} alt="" />
                </div>

                <div className="about__text">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                </div>

            </div>
        </section>

    )
}

export default About
