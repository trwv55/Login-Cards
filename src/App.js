import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import HeaderTeam from './components/HeaderTeam.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
