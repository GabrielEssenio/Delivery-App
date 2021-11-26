import React from 'react';
import NavBar from '../components/Navbar';
import ManagerUser from '../components/ManegerUserAdmin';
import ListUser from '../components/ListUserAdmin';
import * as S from '../styles/Admin';

function Admin() {
  // --adm2@21!!--

  return (
    <div>
      <NavBar />
      <ManagerUser />
      <S.titleList>Lista de usuarios</S.titleList>
      <ListUser />

    </div>
  );
}

export default Admin;
