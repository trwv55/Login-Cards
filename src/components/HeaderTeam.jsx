import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/login';

const HeaderTeam = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="header">
      <div className="header__container">
        <button className="header__button" onClick={handleExit}>
          Выход
        </button>
        <h1 className="header__title">Наша команда</h1>
        <p className="header__text">
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
          плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
        </p>
      </div>
    </div>
  );
};

export default HeaderTeam;
