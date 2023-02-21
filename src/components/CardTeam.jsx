import React from 'react';
import { Link } from 'react-router-dom';

const CardTeam = ({ card }) => {
  return (
    <div className="card">
      <Link key={card.id} to={`/team/${card.id}`}>
        <img className="card__img" src={card.avatar} alt="" />
      </Link>
      <p className="card__name">
        <Link key={card.id} to={`/team/${card.id}`}>
          {card.first_name} {card.last_name}
        </Link>
      </p>
      <button className="card__like"></button>
    </div>
  );
};

export default CardTeam;
