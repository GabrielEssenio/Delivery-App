import React, { useContext, useState } from 'react';
import io from 'socket.io-client';

import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import { createSale, createSaleProducts } from '../services/apis/servicesSales';
import { getFromLocalStorage } from '../services/helpers/servicesLocalStorage';
import * as S from '../styles/Checkout';

const SELECT_SELLER = 'customer_checkout__select-seller';
const INPUT_ADDRESS = 'customer_checkout__input-address';
const INPUT_NUMBER = 'customer_checkout__input-addressNumber';
const SUBMIT_ORDER = 'customer_checkout__button-submit-order';

function DetailsAddress() {
  const history = useHistory();
  const { sellers, totalPrice, cart } = useContext(Context);
  const socket = io('http://localhost:3001');

  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [sellerId, setSellerId] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'address') setAddress(value);
    if (name === 'number') setNumber(value);
    if (name === 'seller') setSellerId(value);
  };

  const filterCart = async (idSale, token) => {
    cart.filter((product) => product.quantity > 0)
      .forEach(({ id, quantity }) => {
        createSaleProducts({ sale_id: idSale, product_id: id, quantity }, token);
      });
  };

  const sendOrder = async () => {
    const { token } = getFromLocalStorage('user');
    const saleData = {
      seller_id: sellerId,
      total_price: totalPrice.replace(',', '.'),
      delivery_address: address,
      delivery_number: number,
      status: 'Pendente' };
    const sale = await createSale(saleData, token);
    const { id } = sale;
    await filterCart(id, token);
    socket.emit('realizarPedido');
    history.push('/customer/orders');
  };

  return (
    <S.checkoutForm>
      <h3>Detalhes e Endereço para Entrega</h3>
      <S.checkoutDiv>
        <S.checkoutSpan>P. Vendedora responsavel:</S.checkoutSpan>
        <S.checkoutSelect
          data-testid={ SELECT_SELLER }
          name="seller"
          onChange={ (e) => handleChange(e) }
        >
          <option value={ null }>Selecionar</option>
          {sellers.map((seller, index) => (
            <option
              key={ index }
              value={ seller.id }
            >
              {seller.name}
            </option>))}
        </S.checkoutSelect>
      </S.checkoutDiv>
      <S.checkoutDiv>
        <S.checkoutSpan>Endereço</S.checkoutSpan>
        <S.checkoutInput
          data-testid={ INPUT_ADDRESS }
          type="text"
          name="address"
          onChange={ (e) => handleChange(e) }
        />
        <S.checkoutSpan>Numero</S.checkoutSpan>
        <S.checkoutInput
          data-testid={ INPUT_NUMBER }
          type="text"
          name="number"
          onChange={ (e) => handleChange(e) }
        />
        <S.finalizarButton
          data-testid={ SUBMIT_ORDER }
          type="button"
          disabled={ sellerId === 0 }
          onClick={ () => sendOrder() }
        >
          Finalizar Pedido
        </S.finalizarButton>
      </S.checkoutDiv>
    </S.checkoutForm>
  );
}

export default DetailsAddress;
