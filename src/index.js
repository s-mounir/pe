import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './utils/index.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Tcd from './pages/Tcd';
import Error from './pages/Error';
import Main from './pages/Main';
import Pacer from './pages/Pacer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/pe" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/pacer/:id" element={<Pacer />} />
        <Route path="/tcd" element={<Tcd />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);