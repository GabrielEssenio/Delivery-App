import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getFromLocalStorage } from '../services/helpers/servicesLocalStorage';
import getAllProcuts from '../services/apis/getCustomer';
import NavBar from '../components/Navbar';
import Context from '../context/Context';
import CardProdutos from '../components/CardProdutos';
import * as S from '../styles/Produtos';

function Produtos() {
  const history = useHistory();
  const { setAllProducts, totalPrice } = useContext(Context);
  useEffect(() => {
    const getProducts = async () => {
      const token = getFromLocalStorage('user');
      const allProducts = await getAllProcuts(token);
      await setAllProducts(allProducts);
    };
    getProducts();
  }, [setAllProducts]);

  return (
    <>
      <NavBar />
      <div>
        <CardProdutos />
      </div>
      <S.footer>
        <S.checkoutButton
          onClick={ () => history.push('/customer/checkout') }
          type="button"
          data-testid="customer_products__button-cart"
          disabled={ (totalPrice === '0,00') }
        >
          <h2
            data-testid="customer_products__checkout-bottom-value"
          >
            {totalPrice}
          </h2>
        </S.checkoutButton>
      </S.footer>
    </>
  );
}

export default Produtos;
