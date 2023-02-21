import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin, selectLogin } from '../redux/slices/login';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const [errorName, setErrorName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState(null);
  const emailValidation = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputValues.email);
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailValidation) {
      setErrorEmail('Некорректный email');
    } else {
      setErrorEmail(null);
    }
    if (inputValues.name.length < 3) {
      setErrorName('Неккорректное имя');
    } else {
      setErrorName(null);
    }
    if (inputValues.password.length < 8) {
      setErrorPassword('Пароль должен быть минимум 8 символов');
    } else {
      setErrorPassword(null);
    }
    if (inputValues.password !== inputValues.passwordConfirmation) {
      setErrorPasswordConfirm('Пароль отличается');
    } else {
      setErrorPasswordConfirm(null);
    }

    handleRedirect();
  };

  function handleRedirect() {
    console.log(errorName);
    console.log(errorPassword);
    console.log(errorPasswordConfirm);

    // if (errorName || errorEmail || errorPassword || errorPasswordConfirm) {
    //   try {
    //     dispatch(fetchLogin());
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
  }

  // if (isAuth) {
  //   return <Navigate to="/team" />;
  // }

  return (
    <div className="layout">
      <div className="form__wrapper">
        <h4 className="title">Регистрация</h4>
        <form className="login" onSubmit={handleSubmit}>
          <div className="login__item name__wrapper">
            <label className="login__item-title name__wrapper-title" htmlFor="name">
              Имя
            </label>
            <div className="login__item-error">
              <input
                className={`input ${Boolean(errorName) ? 'input-error' : ''}`}
                type="text"
                id="name"
                placeholder="Артур"
                value={inputValues.name}
                onChange={(e) => setInputValues({ ...inputValues, name: e.target.value })}
                required
              />
              {errorName && <p className="error error-name">{errorName}</p>}
            </div>
          </div>
          <div className="login__item email__wrapper">
            <label className="login__title email__wrapper-title" htmlFor="email">
              Электронная почта
            </label>
            <div className="login__item-error">
              <input
                className={`input ${Boolean(errorEmail) ? 'input-error' : ''}`}
                type="email"
                id="email"
                name="email"
                placeholder="example@mail.ru"
                value={inputValues.email}
                onChange={(e) => setInputValues({ ...inputValues, email: e.target.value })}
                required
              />
              {errorEmail && <p className="error error-email">{errorEmail}</p>}
            </div>
          </div>
          <div className="login__item password__wrapper">
            <label className="login__title password__wrapper-title" htmlFor="password">
              Пароль
            </label>
            <div className="login__item-error password-error">
              <input
                className={`input ${Boolean(errorPassword) ? 'input-error' : ''}`}
                type="password"
                id="password"
                placeholder="******"
                value={inputValues.password}
                onChange={(e) => setInputValues({ ...inputValues, password: e.target.value })}
                required
              />
              {errorPassword && <p className="error error-pass">{errorPassword}</p>}
            </div>
          </div>
          <div className="login__item password__wrapper">
            <label className="login__title password__wrapper-title" htmlFor="password">
              Подтвердите пароль
            </label>
            <div className="login__item-error password-error">
              <input
                className={`input ${Boolean(errorPasswordConfirm) ? 'input-error' : ''}`}
                type="password"
                id="passwordConfirmation"
                placeholder="******"
                value={inputValues.passwordConfirmation}
                onChange={(e) =>
                  setInputValues({ ...inputValues, passwordConfirmation: e.target.value })
                }
                required
              />
              {errorPasswordConfirm && (
                <p className="error error-pass-conf">{errorPasswordConfirm}</p>
              )}
            </div>
          </div>
          <button className="login__button" type="submit">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
