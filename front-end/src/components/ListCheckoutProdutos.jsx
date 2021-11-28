import React, { useContext } from 'react';
import Context from '../context/Context';
import * as T from '../styles/Table';

const ITEM_NUMBER = 'customer_checkout__element-order-table-item-number-';
const TABLE_NAME = 'customer_checkout__element-order-table-name-';
const TABLE_QUANTITY = 'customer_checkout__element-order-table-quantity-';
const TABLE_PRICE = 'customer_checkout__element-order-table-unit-price-';
const TABLE_SUB_TOTAL = 'customer_checkout__element-order-table-sub-total-';
const TABLE_REMOVE = 'customer_checkout__element-order-table-remove-';
const TOTAL_PRICE = 'customer_checkout__element-order-total-price';

function ListCheckoutProdutos() {
  let count = 0;

  const {
    setCart,
    cart,
    totalPrice,
  } = useContext(Context);

  const removeItem = (itemId) => {
    const newCart = cart.filter((product) => product.id !== itemId);
    setCart(newCart);
  };

  return (
    <div>
      <table>
        <thead>
          <T.tr>
            <T.th>Item</T.th>
            <T.th>Descrição</T.th>
            <T.th>Quantidade</T.th>
            <T.th>Valor Unitário</T.th>
            <T.th>Sub-total</T.th>
            <T.th>Remover Item</T.th>
          </T.tr>
        </thead>
        <tbody>
          {cart.filter((product) => product.quantity > 0).map((product, index) => {
            count += 1;
            return (
              <T.tr key={ index }>
                <T.td
                  data-testid={ `${ITEM_NUMBER}${index}` }
                >
                  {count}
                </T.td>
                <T.td data-testid={ `${TABLE_NAME}${index}` }>{product.name}</T.td>
                <T.td
                  data-testid={
                    `${TABLE_QUANTITY}${index}`
                  }
                >
                  {product.quantity}

                </T.td>
                <T.td
                  data-testid={ `${TABLE_PRICE}${index}` }
                >
                  {product.price.replace('.', ',')}
                </T.td>
                <T.td
                  data-testid={ `${TABLE_SUB_TOTAL}${index}` }
                >
                  {(product.quantity * product.price).toFixed(2).replace('.', ',')}
                </T.td>
                <T.td>
                  <button
                    data-testid={ `${TABLE_REMOVE}${index}` }
                    type="button"
                    onClick={ () => removeItem(product.id) }
                  >
                    Remover
                  </button>
                </T.td>
              </T.tr>
            );
          })}
        </tbody>
      </table>
      <h1 data-testid={ `${TOTAL_PRICE}` }>{totalPrice}</h1>
    </div>
  );
}

export default ListCheckoutProdutos;
