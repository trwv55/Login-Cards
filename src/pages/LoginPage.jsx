import React, { useState } from 'react';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };
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
                className="input name-input"
                type="text"
                id="name"
                placeholder="Артур"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="login__item email__wrapper">
            <label className="login__title email__wrapper-title" htmlFor="email">
              Электронная почта
            </label>
            <div className="login__item-error">
              <input
                className="input email-input"
                type="email"
                id="email"
                placeholder="example@mail.ru"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="login__item password__wrapper">
            <label className="login__title password__wrapper-title" htmlFor="password">
              Пароль
            </label>
            <div className="login__item-error password-error">
              <input
                className="input password-input"
                type="password"
                id="password"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="login__item password__wrapper">
            <label className="login__title password__wrapper-title" htmlFor="password">
              Подтвердите пароль
            </label>
            <div className="login__item-error">
              <input
                className="input"
                type="password"
                id="passwordConfirmation"
                placeholder="******"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                required
              />
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
