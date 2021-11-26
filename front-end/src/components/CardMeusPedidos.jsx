import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import * as S from '../styles/MeusPedidos';

const color = {
  Pendente: '#ff2300',
  Preparando: '#0089ffbf',
  Entregue: '#04ff00',
  'Em Trânsito': '#00ffa1',
};

function CardMeusPedidos({ orders, token }) {
  const history = useHistory();

  const { role } = token;
  const { id, sale_date: saleDate, status,
    total_price: totalPrice,
    delivery_address: deliveryAddress } = orders;

  const newDate = new Date(saleDate);
  const dia = newDate.getDate().toString().padStart(2, '0');
  const mes = (newDate.getMonth() + 1).toString().padStart(2, '0');
  const ano = newDate.getFullYear();
  const dateFormat = `${dia}/${mes}/${ano}`;
  const ADRESS_SELLER = 'seller_orders__element-card-address-';

  function detailOrder(idUser) {
    history.push(`/${role}/orders/${idUser}`);
  }

  return (
    <S.buttonMeusPedidos
      type="button"
      onClick={ () => { detailOrder(id); } }
    >
      <div>
        <S.textPedido>Pedido</S.textPedido>
        <S.numberPedido
          data-testid={
            `${role}_orders__element-order-id-${id}`
          }
        >
          {id}
        </S.numberPedido>
      </div>
      <S.allPedido>

        <S.infoPedido>
          <S.statusPedido
            color={ color[status] }
            data-testid={ `${role}_orders__element-delivery-status-${id}` }
          >
            <S.textStatus>{status}</S.textStatus>
          </S.statusPedido>
          <div>
            <S.textDate data-testid={ `${role}_orders__element-order-date-${id}` }>
              {dateFormat}
            </S.textDate>
            <S.textPrice
              data-testid={ `${role}_orders__element-card-price-${id}` }
            >
              {totalPrice.replace('.', ',')}
            </S.textPrice>
          </div>
        </S.infoPedido>
        <S.adressSeler>

          {role === 'seller'
            ? (
              <S.textAdress data-testid={ `${ADRESS_SELLER}${id}` }>
                {deliveryAddress}
              </S.textAdress>
            )
            : null}
        </S.adressSeler>
      </S.allPedido>
    </S.buttonMeusPedidos>
  );
}

CardMeusPedidos.propTypes = {
  orders: PropTypes.shape({
    id: PropTypes.number,
    sale_date: PropTypes.string,
    status: PropTypes.string,
    total_price: PropTypes.string,
    delivery_address: PropTypes.string,
  }).isRequired,
  token: PropTypes.shape({
    role: PropTypes.string,
  }).isRequired,
};

export default CardMeusPedidos;
