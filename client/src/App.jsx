import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './css/style.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Destination from './components/Destination';
import Compose from './components/Compose';
import Footer from './components/Footer';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/destination' element={<Destination />} />
          <Route path='/compose' element={<Compose />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
