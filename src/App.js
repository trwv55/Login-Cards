import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import CardPage from './pages/CardPage.jsx';
import { useSelector } from 'react-redux';
import { selectLogin } from './redux/slices/login';

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team/:id" element={<CardPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
