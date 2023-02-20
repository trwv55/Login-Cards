import React from 'react';
import { useSelector } from 'react-redux';
import CardTeam from '../components/CardTeam.jsx';
import HeaderTeam from '../components/HeaderTeam.jsx';
import { selectLogin } from '../redux/slices/login';

const TeamPage = () => {
  // const { data } = useSelector(selectLogin);

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
