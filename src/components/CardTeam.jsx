import React from 'react';

const CardTeam = () => {
  return (
    <div className="card">
      <img className="card__img" src="../images/cardImg.png" alt="" />
      <p className="card__name">Артур Королёв</p>
      <button className="card__like"></button>
    </div>
  );
};

export default CardTeam;
