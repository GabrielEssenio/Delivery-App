import React, { useContext, useEffect } from 'react';
import ListCheckoutProdutos from '../components/ListCheckoutProdutos';
import DetailsAddress from '../components/DetailsAddress';
import NavBar from '../components/Navbar';
import Context from '../context/Context';
import getAllSellers from '../services/apis/getAllSellers';
import { getFromLocalStorage } from '../services/helpers/servicesLocalStorage';

function Checkout() {
  const { setSellers } = useContext(Context);

  useEffect(() => {
    const getSellers = async () => {
      const { token } = getFromLocalStorage('user');
      const allSellers = await getAllSellers(token);
      setSellers(allSellers);
    };
    getSellers();
  }, [setSellers]);

  return (
    <div>
      <NavBar />
      <ListCheckoutProdutos />
      <DetailsAddress />
    </div>
  );
}

export default Checkout;
