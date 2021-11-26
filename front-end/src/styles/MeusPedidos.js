import styled from 'styled-components';

export const mainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
  justify-items: center;
  `;

export const contentMeusPedidos = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 20px;
  `;

export const textPedido = styled.h2`
color: #333333;
font-size: 28px;
  `;

export const numberPedido = styled.h2`
color: #333333;
font-size: 28px;
  `;

export const buttonMeusPedidos = styled.button`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 45%;
background-color: #ffffff;
color: #333333;
border-radius: 15px;
box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
align-items: center;
transition: all 0.3s ease-out;
margin-bottom: 20px;
&:hover {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
}
`;

export const infoPedido = styled.div`
display: flex;
flex-direction: row;
`;

export const statusPedido = styled.div`
display: flex;
align-items: center;
background-color: ${(props) => props.color};
text-align: center;
border-radius: 15px;
margin: 5%;
`;

export const textStatus = styled.h1`
font-size: 30px;
color: #333;
padding-right: 10px;
padding-left: 10px;
`;

export const textPrice = styled.h1`
justify-self: center;
align-self: center;
font-size: 18px;
background-color: #333333;
color: #FFC500;
border-radius: 5px;
margin-bottom:10px;
padding: 5px;
`;

export const textDate = styled.h1`
margin-bottom:10px;
margin-top:10px;
justify-self: center;
align-self: center;
font-size: 18px;
background-color: #333333;
color: #FFC500;
border-radius: 5px;
padding: 8px 12px;
`;

export const adressSeler = styled.h1`
padding-top:15px;
padding-bottom:10px;
`;

export const textAdress = styled.p`
font-size:18px
`;

export const allPedido = styled.div`
display: flex;
flex-direction: column;
`;
