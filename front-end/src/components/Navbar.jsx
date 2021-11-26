import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Context from '../context/Context';
import * as S from '../styles/Navbar';
import { removeLocalStorage } from '../services/helpers/servicesLocalStorage';

function NavBar() {
  const history = useHistory();
  const { User } = useContext(Context);

  const checkRole = () => {
    const { role } = User;

    if (role === 'customer') {
      return (
        <S.divLeft>
          <Link to="/customer/products">
            <S.buttonNav
              type="button"
              data-testid="customer_products__element-navbar-link-products"
            >
              PRODUTO
            </S.buttonNav>
          </Link>
          <Link to="/customer/orders">
            <S.buttonNav
              type="button"
              data-testid="customer_products__element-navbar-link-orders"
            >
              MEUS PEDIDOS
            </S.buttonNav>
          </Link>
        </S.divLeft>
      );
    }

    if (role === 'seller') {
      return (
        <div>
          <S.buttonNav
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
            onClick={ () => history.push('/seller/orders') }
          >
            Pedidos
          </S.buttonNav>
        </div>
      );
    }

    if (role === 'administrador') {
      return (
        <div>
          <Link to="/page404">
            <S.buttonNav
              type="button"
              data-testid="customer_products__element-navbar-link-orders"
            >
              Gerenciar Usiários
            </S.buttonNav>
          </Link>
        </div>
      );
    }

    if (!role) { history.push('/'); }
  };

  return (
    <S.navBar>
      { checkRole() }
      <S.divRight>
        <S.spanName
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {User.name}
        </S.spanName>
        <Link to="/login">
          <S.buttonNav
            type="button"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => removeLocalStorage('user') }
          >
            SAIR
          </S.buttonNav>
        </Link>
      </S.divRight>
    </S.navBar>
  );
}

export default NavBar;
