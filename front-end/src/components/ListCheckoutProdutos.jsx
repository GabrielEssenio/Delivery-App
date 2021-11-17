import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import Context from '../context/Context';

const ITEM_NUMBER = 'customer_checkout__element-order-table-item-number-';
const TABLE_NAME = 'customer_checkout__element-order-table-name-';
const TABLE_QUANTITY = 'customer_checkout__element-order-table-quantity-';
const TABLE_PRICE = 'customer_checkout__element-order-table-unit-price-';
const TABLE_SUB_TOTAL = 'customer_checkout__element-order-table-sub-total-';
const TABLE_REMOVE = 'customer_checkout__element-order-table-remove-';
const TOTAL_PRICE = 'customer_checkout__element-order-total-price';

function ListCheckoutProdutos() {
  let count = 0;

  const { setCart, cart, totalPrice } = useContext(Context);

  const removeItem = (itemId) => {
    const newCart = cart.filter((product) => product.id !== itemId);
    setCart(newCart);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => {
            if (product.quantity > 0) {
              count += 1;
              return (
                <tr key={ index }>
                  <td
                    data-testid={ `${ITEM_NUMBER + index}` }
                  >
                    {count}
                  </td>
                  <td data-testid={ `${TABLE_NAME + index}` }>{product.name}</td>
                  <td data-testid={ `${TABLE_QUANTITY + index}` }>{product.quantity}</td>
                  <td
                    data-testid={ `${TABLE_PRICE + index}` }
                  >
                    {product.price.replace('.', ',')}
                  </td>
                  <td
                    data-testid={ `${TABLE_SUB_TOTAL + index}` }
                  >
                    {product.quantity * product.price}
                  </td>
                  <td>
                    <button
                      data-testid={ `${TABLE_REMOVE + index}` }
                      type="button"
                      onClick={ () => removeItem(product.id) }
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
      <h1 data-testid={ `${TOTAL_PRICE}` }>{totalPrice}</h1>
    </div>
  );
}

// ListCheckoutProdutos.propTypes = {
//   product: PropTypes.shape({
//     name: PropTypes.string,
//     quantity: PropTypes.number,
//     price: PropTypes.string,
//   }).isRequired,
// };

export default ListCheckoutProdutos;
