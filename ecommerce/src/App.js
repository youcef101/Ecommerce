import './App.css';
import Home from './pages/Home';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart';
import Success from './pages/Success';
import { useSelector } from 'react-redux';
import AllProducts from './pages/AllProducts';
import SearchedProduct from './pages/SearchedProduct';
function App() {
  const user = useSelector(state => state.user.current_user)
  console.log(user)
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/products/:category'>
            <ProductList />
          </Route>
          <Route path='/product_detail/:productId'>
            <ProductDetail />
          </Route>
          <Route path='/all/products'>
            <AllProducts />
          </Route>
          <Route path='/:productId/search'>
            <SearchedProduct />
          </Route>
          <Route path='/register'>
            {user ? <Redirect to='/' /> : <Register />}
          </Route>
          <Route path='/login'>
            {user ? <Redirect to='/' /> : <Login />}
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/success'>
            <Success />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
