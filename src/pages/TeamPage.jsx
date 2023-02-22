import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardTeam from '../components/CardTeam.jsx';
import HeaderTeam from '../components/HeaderTeam.jsx';
import { fetchLogin, selectLogin, fetchMoreUsers } from '../redux/slices/login';

const TeamPage = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const dispatch = useDispatch();
  const { data } = useSelector(selectLogin);
  const [allPages, setAllPages] = useState();

  useEffect(() => {
    dispatch(fetchLogin());
  }, []);

  useEffect(() => {
    setAllPages(data?.data);
  }, [data]);

  const getMorePage = async (pageNum) => {
    try {
      // dispatch(fetchMoreUsers(pageNum));
      const responce = await axios.get(`https://reqres.in/api/users?page=${pageNum}`);
      const { data, total_pages } = responce.data;
      setAllPages((prevState) => [...prevState, ...data]);
      setCurrentPage(pageNum + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMorePage = () => {
    getMorePage(currentPage);
  };
  console.log(allPages);

  return (
    <div className="team">
      <div className="team__header">
        <HeaderTeam href="/team" />
      </div>
      <div className="team__main">
        {allPages?.map((card, index) => (
          <CardTeam key={index} card={card} />
        ))}
        <div className="button__wrapper">
          <button className="more" onClick={handleMorePage}>
            Показать еще
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
