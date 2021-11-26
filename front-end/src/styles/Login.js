import styled from 'styled-components';

export const loginContainer = styled.div`
  border: 7px ridge #730504;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  margin: 3% 25%;
`;

export const loginImg = styled.img`
  margin: 5% 25%;
  border: 7px ridge #730504;
`;

export const loginForm = styled.div`
  font-size: large;
  margin: 0% 23% 5%;
`;

export const loginInput = styled.input`
  border: 5px ridge #730504;
  font-size: large;
  margin: 1%;
  width:100%;
`;

export const loginButton = styled.button` 
  background-color: #333333;
  border: 2px solid #FFC500;
  border-radius: 20px;
  color: white;
  padding: 3% 4%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 125%;
  margin: 1%;
  cursor: pointer;
  &:hover {
    background-color:#FFC500
  }
`;

export const loginError = styled.h2`
  margin:  1% 20%;
  color: #FFC500;
  font-size: 125%;
`;

export const loginCadastror = styled.h1`
  margin:  0% 30%;
  color: #FFC500;
  font-size: 200%;
`;
