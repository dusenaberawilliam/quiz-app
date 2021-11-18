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


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
