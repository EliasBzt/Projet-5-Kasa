import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Error from './components/pages/Error.jsx';
import Logements from './components/pages/Logements.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './styles/App.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logements/:id" element={<Logements />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
