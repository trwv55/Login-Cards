import React from 'react';

const HeaderTeam = () => {
  return (
    <div className="header">
      <div className="header__container">
        <button className="header__button">Выход</button>
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
