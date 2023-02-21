import React, { useEffect, useState } from 'react';
import HeaderTeam from '../components/HeaderTeam.jsx';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/login';

const CardPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [card, setCard] = useState();

  useEffect(() => {
    async function fetchCard() {
      try {
        const { data } = await axios.get('https://reqres.in/api/users/' + id);
        setCard(data?.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCard();
  }, []);

  const handleExit = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="team">
      <div className="team__header">
        <div className="header">
          <div className="header__container">
            <button className="header__button" onClick={handleExit}>
              Выход
            </button>
            <Link to={`/team/`}>
              <button className="header__button header__button-back">Назад</button>
            </Link>
            <div className="card__header">
              <img className="card__header-img" src={card?.avatar} alt="" />
              <div className="card__header-text">
                <h3>
                  {card?.first_name} {card?.last_name}
                </h3>
                <p>Партнер</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team__main page__main">
        <div className="page">
          <div className="page__text">
            <p>
              Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых
              продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и
              ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса,
              улучшать процессы за счет применения новейших технологий и увеличивать продажи,
              используя самые современные аналитические инструменты.
            </p>
            <br />
            <p>
              В работе с клиентами недостаточно просто решить конкретную проблему или помочь
              справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из
              самых позитивных моментов — это осознание того, что ты помог клиенту перейти на
              совершенно новый уровень компетентности, уверенность в том, что после окончания
              проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".
            </p>
            <br />
            <p>
              Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную
              предпринимательскую деятельность. Он является совладельцем сети клиник эстетической
              медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором
              других бизнес-проектов.
            </p>
          </div>
          <div className="page__links">
            <a className="telefon" href="tel:+79543334455">
              +7 (954) 333-44-55
            </a>
            <a className="mail" href={`mailto:${card?.email}`} target="_blank">
              {card?.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
