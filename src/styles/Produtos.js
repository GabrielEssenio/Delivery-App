import styled from 'styled-components';

export const contentProduct = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const eachProduct = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  width: 30%;
  background-color: #ffffff;
  margin-top: 10px;
  margin-bottom: 20px;
  transition: all 0.3s ease-out;
  &:hover {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
}
`;

export const priceProduct = styled.h2`
  background-color: #333333;
  color: #FFC500;
  width: 20%;
  text-align: center;
  border-radius:5px;
`;

export const imgProduct = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
  align-self: center;
`;

export const nameProduct = styled.p`
  align-self: center;
  font-size: 24px;
  color: #333333;
`;
export const qtyProduct = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

export const buttonProduct = styled.button`
   background-color: #333333;
  color: #FFC500;
  border: 1px;
  width: 7%;
  border-radius: 20%;
`;

export const inputProduct = styled.input`
  width: 20%;
  text-align: center;
`;

export const footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: end;
`;

export const checkoutButton = styled.button` 
  background-color: #333333;
  border: 2px solid #FFC500;
  border-radius: 20px;
  color: white;
  padding: 2%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 125%;
  margin: 1% 5%;
  cursor: pointer;
  &:hover {
    background-color:#FFC500
  }
`;
