import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const [errors, setErrors] = useState({
    errorName: '',
    errorPassword: '',
    errorPasswordConfirm: '',
  });
  const [errorEmail, setErrorEmail] = useState(null);
  const emailValidation = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputValues.email);
  const navigate = useNavigate();
  let formIsValid = true;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailValidation) {
      setErrorEmail('Некорректный email');
    } else {
      setErrorEmail(null);
    }

    if (inputValues.name.length < 3) {
      setErrors((prevState) => ({ ...prevState, errorName: 'Неккорректное имя' }));
      formIsValid = false;
    } else {
      setErrors((prevState) => ({ ...prevState, errorName: '' }));
    }

    if (inputValues.password.length < 8) {
      setErrors((prevState) => ({
        ...prevState,
        errorPassword: 'Пароль должен быть минимум 8 символов',
      }));
      formIsValid = false;
    } else {
      setErrors((prevState) => ({ ...prevState, errorPassword: '' }));
    }

    if (inputValues.password !== inputValues.passwordConfirmation) {
      setErrors((prevState) => ({ ...prevState, errorPasswordConfirm: 'Пароль отличается' }));
      formIsValid = false;
    } else {
      setErrors((prevState) => ({ ...prevState, errorPasswordConfirm: '' }));
    }

    if (formIsValid) {
      navigate('/team');
    }
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
                className={`input ${Boolean(errors.errorName) ? 'input-error' : ''}`}
                type="text"
                id="name"
                placeholder="Артур"
                value={inputValues.name}
                onChange={(e) => setInputValues({ ...inputValues, name: e.target.value })}
                required
              />
              {errors.errorName && <p className="error error-name">{errors.errorName}</p>}
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
                className={`input ${Boolean(errors.errorPassword) ? 'input-error' : ''}`}
                type="password"
                id="password"
                placeholder="******"
                value={inputValues.password}
                onChange={(e) => setInputValues({ ...inputValues, password: e.target.value })}
                required
              />
              {errors.errorPassword && <p className="error error-pass">{errors.errorPassword}</p>}
            </div>
          </div>
          <div className="login__item password__wrapper">
            <label className="login__title password__wrapper-title" htmlFor="password">
              Подтвердите пароль
            </label>
            <div className="login__item-error password-error">
              <input
                className={`input ${Boolean(errors.errorPasswordConfirm) ? 'input-error' : ''}`}
                type="password"
                id="passwordConfirmation"
                placeholder="******"
                value={inputValues.passwordConfirmation}
                onChange={(e) =>
                  setInputValues({ ...inputValues, passwordConfirmation: e.target.value })
                }
                required
              />
              {errors.errorPasswordConfirm && (
                <p className="error error-pass-conf">{errors.errorPasswordConfirm}</p>
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
