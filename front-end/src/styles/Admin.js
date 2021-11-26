import styled from 'styled-components';

export const mainContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content:center;
  padding-top: 30px;
  padding-bottom: 30px;
  `;

export const titleAdmin = styled.h1`
  padding-top: 30px;
  padding-bottom: 30px;
  color: #333333;
  font-size: 50px;
  `;

export const formAdmin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  justify-items: center;
  align-items: center;
  `;

export const legend = styled.legend`
color: #FFC500;
background-color: #333333;
border-radius: 5px;
box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
font-size: 24px;
`;

export const inputText = styled.input`
border-radius: 5px;
box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
font-size: 18px;
`;

export const containerSelect = styled.div`
`;

export const containerButton = styled.div`
`;

export const containerImput = styled.div`
border-radius: 5px;
box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
`;

export const selectRole = styled.select`
border-radius: 5px;
padding: 0px 20px 0px 20px;
background-color: #730504;
color: #FFC500;
background-color: #333333;
font-size: 24px;
`;

export const buttonCadastrar = styled.button`
border-radius: 5px;
padding: 0px 20px 0px 20px;
background-color: #730504;
color: #FFC500;
font-size: 24px;
`;

// LIST USERS

export const mainUlList = styled.main`
display: flex;
flex-direction:row;
justify-content: center;
`;

export const ulUsers = styled.ul`
display: flex;
flex-direction:column;
padding: 0px 20px 0px 20px;
list-style-type: none;
background-color: #333333;
width: 80%;
border-radius:15px;
margin-left: 30px;
justify-content:space-evenly;
li:nth-child(odd) {
  color: #FFF1CF;
}
`;

export const liUsers = styled.li`
display: flex;
flex-direction:row;
color: #FFC500;
padding-top: 15px;
padding-bottom: 30px;
font-size: 20px;
justify-content: space-between;
`;

export const buttonDelete = styled.button`
background-color: #730504;
color: #FFC500;
border-radius: 5px;
box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
margin-left: 30px;
font-size: 20px;
`;

// ADMIN PAGES
export const titleList = styled.h1`
margin-top: 50px;
margin-bottom: 30px;
text-align: center;
font-size: 50px;
color: #333333;
`;
