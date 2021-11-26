import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { setOnLocalStorage, getFromLocalStorage }
  from '../services/helpers/servicesLocalStorage';
import Context from '../context/Context';
import { loginService } from '../services/apis/servicesLogin';
import logo from '../images/ZeJaquinhaDlivery.png';
import * as S from '../styles/Login';

function Login() {
  const token = getFromLocalStorage('user');
  const history = useHistory();
  const { setUser } = useContext(Context);
  const [disableBtn, setDisableBtn] = useState(true);
  const [hidden, setHidden] = useState(true);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const redirect = () => {
    history.push('/register');
  };

  const validateFields = ({ email, password }) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordLength = password.length;
    const minPassword = 5;

    if (regex.test(email) && passwordLength > minPassword) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const checkRole = (message) => {
    setOnLocalStorage('user', message);
    setUser(message);
    if (message.role === 'seller') {
      history.push('/seller/orders');
    } else if (message.role === 'administrator') {
      history.push('/admin/manage');
    } else if (message.role === 'customer') {
      history.push('/customer/products');
    } else {
      history.push('/');
    }
  };

  const handleClick = async () => {
    const checkLogin = await loginService(login);
    if (checkLogin.message.id) {
      const { message } = checkLogin;
      checkRole(message);
    }
    setHidden(false);
  };

  const isLogin = () => {
    checkRole(token);
  };

  useEffect(() => {
    validateFields(login);
  }, [login]);

  return (
    <S.loginContainer>
      {token !== null
        ? isLogin()
        : <S.loginImg src={ logo } alt="logo Zé Jaquinha" />}
      <S.loginForm>
        <S.loginInput
          type="email"
          name="email"
          data-testid="common_login__input-email"
          placeholder="Email"
          onChange={ handleChange }
        />
        <S.loginInput
          type="password"
          name="password"
          data-testid="common_login__input-password"
          placeholder="Senha"
          onChange={ handleChange }
        />
        <S.loginButton
          className="loginButton"
          type="button"
          data-testid="common_login__button-login"
          disabled={ disableBtn }
          onClick={ handleClick }
        >
          Entrar/Logar
        </S.loginButton>
        <S.loginButton
          type="button"
          data-testid="common_login__button-register"
          onClick={ redirect }
        >
          Registrar novo usuario
        </S.loginButton>
        <S.loginError data-testid="common_login__element-invalid-email" hidden={ hidden }>
          Email ou Senha invalidos
        </S.loginError>
      </S.loginForm>
    </S.loginContainer>
  );
}

export default Login;
