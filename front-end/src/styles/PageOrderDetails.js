import styled from 'styled-components';

export const divPageOrderDetails = styled.div`
  width: 100%;
`;

export const divOrderDetail = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 30px;
  font-size: 1.3em;
`;

export const divTotalPrice = styled.div`
  background-color: #4CAF50;
  width: 100px;
  text-align: center;
  border-radius: 6px;
  font-size: 1em;
  padding: 5px;
  margin-top: 100px;
  margin-left: 20px;
  position: fixed;
`;

export const spanStatus = styled.span`
  background-color: ${(props) => props.color};
  padding: 5px 15px;
  border-radius: 15px;
`;

// const color = {
//   Pendente: '#ff2300',
//   Preparando: '#0089ffbf',
//   Entregue: '#04ff00',
// };
