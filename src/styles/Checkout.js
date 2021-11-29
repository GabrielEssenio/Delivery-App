import styled from 'styled-components';

export const checkoutForm = styled.form`
  border: 2px solid #730504;
  margin: 5%;
`;

export const finalizarButton = styled.button` 
  background-color: #333333;
  border: 2px solid #FFC500;
  border-radius: 20px;
  color: white;
  padding: 1%;
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

export const checkoutInput = styled.input`
  border: 3px ridge #730504;
  font-size: large;
  margin: 1%;
  width:25%;
`;

export const checkoutSpan = styled.span`
  font-size: 150%;
  margin: 1%;
  width:25%;
`;

export const checkoutDiv = styled.div`
  font-size: large;
`;

export const checkoutSelect = styled.select`
  font-size: large;
  width:20%;
`;

export const checkoutTotal = styled.h1`
  margin: 2% 1% 5% 70%
`;

export const checkoutTitle = styled.h1`
  margin-left: 10%
`;
