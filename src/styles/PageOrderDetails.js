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

export const checkoutTitle = styled.h1`
  margin-left: 80%
`;

export const spanStatus = styled.span`
  background-color: ${(props) => props.color};
  padding: 5px 15px;
  border-radius: 15px;
`;

export const statusButton = styled.button`
  background-color: #333333;
  color: #ffc500;
  padding: 10px 15px;
  border-radius: 15px;
  &:disabled {
    background-color: #333333a3;
    color: #ffc50075;
  }
  &:hover {
    background-color: #3f3e3e;
  }
`;
