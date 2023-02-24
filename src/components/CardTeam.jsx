import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite, selectFavorite } from '../redux/slices/favorite';

const CardTeam = ({ card }) => {
  const dispatch = useDispatch();
  const { idList } = useSelector(selectFavorite);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (idList.includes(card.id)) {
      setActive(true);
    }
  }, [idList]);

  const handleLikeButton = (id) => {
    if (idList.includes(id)) {
      dispatch(removeFromFavorite(id));
      setActive(false);
    } else {
      dispatch(addToFavorite(id));
    }
  };

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
      <button
        className={`card__like ${active ? 'card__like-active' : ''}`}
        onClick={() => handleLikeButton(card.id)}></button>
    </div>
  );
};

export default CardTeam;
