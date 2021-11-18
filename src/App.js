import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Footer from './share/footer/Footer';
import LandingPages from './landingpage/LandingPages';
import Header from './share/navigation/Header';
import Navbar from './share/navigation/Navbar'
import Login from './signing/Login';
import About from './landingpage/About';
import ContactUs from './landingpage/ContactUs';
import Quiz from './quiz/Quiz';
import Results from './quiz/Results';
import { QuizContext } from './helpers/Contexts';

import { useState } from 'react';


const App = () => {

  const [score, setScore] = useState(0);

  return (
    <div className="app">
      <QuizContext.Provider value={{ score, setScore }}>
        <BrowserRouter>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPages />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Results />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </QuizContext.Provider>

    </div>
  );
}

export default App;
