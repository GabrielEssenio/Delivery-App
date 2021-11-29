// import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import { sendNewUser } from '../services/apis/servicesLogin';
import { setOnLocalStorage } from '../services/helpers/servicesLocalStorage';
import Context from '../context/Context';
import logo from '../images/ZeJaquinhaDlivery.png';
import * as S from '../styles/Login';

const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const MIN_NAME = 12;
const MIN_PASSWORD = 6;

function Register() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);
  const { setUser } = useContext(Context);
  const [showMessage, setShowMessage] = useState(false);
  const [showMessageError, setShowMessageError] = useState('Erro');

  const checkRole = (message) => {
    setOnLocalStorage('user', message);
    setUser(message);
    history.push('/customer/products');
  };

  const handleClick = async () => {
    const checkLogin = await sendNewUser(name, email, password);
    if (checkLogin.message.id) {
      const { message } = checkLogin;
      checkRole(message);
    } else {
      setShowMessageError('Email ou usuário já existente!');
      setShowMessage(true);
    }
  };

  useEffect(() => {
    const isValidEmail = regex.test(email);
    const isValidName = name.length >= MIN_NAME;
    const isValidPassword = password.length >= MIN_PASSWORD;

    if (isValidEmail && isValidName && isValidPassword) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [name, email, password]);

  const redirect = () => {
    history.push('/');
  };

  return (
    <S.loginContainer className="register">
      <S.loginImg src={ logo } alt="logo Zé Jaquinha" />
      <S.loginCadastror>Cadastre - se</S.loginCadastror>
      <S.loginForm onSubmit={ handleClick }>
        <S.loginInput
          id="name"
          type="text"
          placeholder="Seu nome"
          value={ name }
          onChange={ ({ target: { value } }) => setName(value) }
          data-testid="common_register__input-name"
        />
        <S.loginInput
          id="email"
          type="text"
          placeholder="Seu-email@site.com.br"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
          data-testid="common_register__input-email"
        />
        <S.loginInput
          type="password"
          placeholder="******"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
          data-testid="common_register__input-password"
        />
        <S.loginButton
          type="submit"
          data-testid="common_register__button-register"
          disabled={ disableBtn }
        >
          Cadastrar
        </S.loginButton>
        <S.loginButton
          type="submit"
          data-testid="common_register__button-register"
          onClick={ redirect }
        >
          Voltar/Login
        </S.loginButton>
      </S.loginForm>
      {
        showMessage
        && (
          <span
            data-testid="common_register__element-invalid_register"
          >
            { showMessageError }
          </span>
        )
      }
    </S.loginContainer>
  );
}

export default Register;
