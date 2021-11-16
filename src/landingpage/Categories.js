import React from 'react'
import './Categories.css'

import Nodejs from '../assets/Langs/node.png'
import Ruby from '../assets/Langs/ruby.png'
import Python from '../assets/Langs/python.png'
import Csharp from '../assets/Langs/csharp.png'
import Php from '../assets/Langs/php.png'
import Clojure from '../assets/Langs/clojure.png'
import Scala from '../assets/Langs/scala.png'

const Categories = () => {
    return (
        <div class="category">
            <h2 class="category__text-center">
                Quiz category
            </h2>
            <div class="category__img">
                <div class="category__card">
                    <h4>Node.js</h4>
                    <img src={Nodejs} alt="" />
                </div>
                <div class="category__card">
                    <h4>Python</h4>
                    <img src={Python} alt="" />
                </div>
                <div class="category__card">
                    <h4>C#</h4>
                    <img src={Csharp} alt="" />
                </div>
                <div class="category__card">
                    <h4>Ruby</h4>
                    <img src={Ruby} alt="" />
                </div>
                <div class="category__card">
                    <h4>PHP</h4>
                    <img src={Php} alt="" />
                </div>
                <div class="category__card">
                    <h4>Scala</h4>
                    <img src={Scala} alt="" />
                </div>
                <div class="category__card">
                    <h4>Clojure</h4>
                    <img src={Clojure} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Categories
