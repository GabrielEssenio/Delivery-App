import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import NavBar from '../components/Navbar';
import getOrderDetails from '../services/apis/getOrderDetails';
import { getFromLocalStorage } from '../services/helpers/servicesLocalStorage';
import * as T from '../styles/Table';
import * as P from '../styles/PageOrderDetails';
import formatDate from '../services/helpers/formatDate';

// Definição de constantes
const ID_ORDER = 'customer_order_details__element-order-details-label-order-id';
const NAME_SELLER = 'customer_order_details__element-order-details-label-seller-name';
const ORDER_DATE = 'customer_order_details__element-order-details-label-order-date';
const STATUS = 'customer_order_details__element-order-details-label-delivery-status';
const CHECK_STAUS = 'customer_order_details__button-delivery-check';
const ITEM = 'customer_order_details__element-order-table-item-number-'; // index
const NAME = 'customer_order_details__element-order-table-name-'; // index
const QUANTITY = 'customer_order_details__element-order-table-quantity-'; // index
const SUB_TOTAL = 'customer_order_details__element-order-table-sub-total-'; // index
const UNIT_PRICE = 'customer_order_details__element-order-table-unit-price-'; // index
const TOTAL_PRICE = 'customer_order_details__element-order-total-price';
const DEFAULT_DATA_PRODUCTS = {
  seller: { name: '' },
  productsSold: [],
  user: { name: '' },
  sale_date: '',
  total_price: '',
};

function OrderDetails() {
  const [productsDetails, setProductsDetails] = useState(DEFAULT_DATA_PRODUCTS);
  const { idVenda } = useParams();
  const { token } = getFromLocalStorage('user');

  useEffect(() => {
    (async () => {
      const response = await getOrderDetails(token, idVenda);
      if (!response.erro) setProductsDetails(response);
    })();
  }, [idVenda, token]);

  // components
  const theadOrderDetails = () => (
    <T.tr>
      <T.th>Item</T.th>
      <T.th>Descrição</T.th>
      <T.th>Quantidade</T.th>
      <T.th>Valor Unitário</T.th>
      <T.th>Sub-total</T.th>
    </T.tr>
  );

  const tbodyOrderDetails = (productsSolded) => productsSolded.map(
    ({ name, SalesProduct: { quantity }, price }, index) => (
      <T.tr key={ index }>
        <T.td data-testid={ ITEM + index }>{index + 1}</T.td>
        <T.td data-testid={ NAME + index }>{name}</T.td>
        <T.td data-testid={ QUANTITY + index }>{quantity}</T.td>
        <T.td data-testid={ UNIT_PRICE + index }>{price.replace('.', ',')}</T.td>
        <T.td data-testid={ SUB_TOTAL + index }>{quantity * price}</T.td>
      </T.tr>
    ),
  );

  return (
    <P.divPageOrderDetails>
      <NavBar />

      <P.divOrderDetail>
        <div className="pedito-id">
          <span>pedido:</span>
          <span data-testid={ ID_ORDER }>{ productsDetails.id }</span>
        </div>
        <div className="pessoa-vendedora">
          <span>Vendedor:</span>
          <span data-testid={ NAME_SELLER }>
            { productsDetails.seller.name }
          </span>
        </div>
        <div className="pedido-data">
          <span data-testid={ ORDER_DATE }>
            { formatDate(productsDetails.sale_date) }
          </span>
        </div>
        <div className="pedido-status">
          <span data-testid={ STATUS }>{ productsDetails.status }</span>
        </div>
        <div className="button-check-status">
          <button
            type="button"
            disabled
            data-testid={ CHECK_STAUS }
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
      </P.divOrderDetail>

      <div>
        <T.table>
          <T.thead>
            {theadOrderDetails()}
          </T.thead>
          <T.tbody>
            {tbodyOrderDetails(productsDetails.productsSold)}
          </T.tbody>
        </T.table>
      </div>

      {/* Não sei onde esta o data-testId 46 */}
      <P.divTotalPrice>
        <span>Total:</span>
        <span data-testid={ TOTAL_PRICE }>
          {productsDetails.total_price.replace('.', ',')}
        </span>
      </P.divTotalPrice>

    </P.divPageOrderDetails>
  );
}

export default OrderDetails;