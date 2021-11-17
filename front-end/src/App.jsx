import React from 'react';

import { Route, Switch, Redirect } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import Produtos from './pages/Produtos';
import MeusPedidos from './pages/MeusPedidos';
import Checkout from './pages/Checkout';
import Page404 from './pages/Page404';
import OrderDetails from './pages/OrderDetails';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={ () => <Redirect to="/login" /> } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer/products" component={ Produtos } />
        <Route path="/customer/meusPedidos" component={ MeusPedidos } />
        <Route path="/customer/checkout" component={ Checkout } />
        <Route path="/customer/orders/:idVenda" component={ OrderDetails } />
        <Route path="/page404" component={ Page404 } />
      </Switch>
    </div>
  );
}

export default App;
