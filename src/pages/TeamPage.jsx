import React from 'react';
import CardTeam from '../components/CardTeam.jsx';
import HeaderTeam from '../components/HeaderTeam.jsx';

const TeamPage = () => {
  const cards = new Array(8).fill(null);

  return (
    <div className="team">
      <div className="team__header">
        <HeaderTeam />
      </div>
      <div className="team__main">
        {cards.map((_, index) => (
          <CardTeam key={index} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
