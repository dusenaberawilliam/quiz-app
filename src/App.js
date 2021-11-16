import { BrowserRouter as Router, Route, Swith } from 'react-router-dom'

import './App.css';
import Footer from './share/footer/Footer';
import LandingPages from './landingpage/LandingPages';
import Header from './share/navigation/Header';
import Navbar from './share/navigation/Navbar'


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Navbar />
        <LandingPages />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
