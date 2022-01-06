import styled from 'styled-components';
import './App.css';
import SideBar from './components/SideBar';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import UserList from './pages/UserList';
import SingleUser from './pages/SingleUser';
import { products_rows, users_rows } from './dummyData.js'
import { useState } from 'react';
import AddUser from './pages/AddUser';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import AddProduct from './pages/AddProduct';

function App() {
  const [users_data, setUsersData] = useState(users_rows)
  const [products_data, setProductsData] = useState(products_rows)
  return (
    <div className="App">
      <Router>
        <Topbar />
        <HomeContainer>
          <SideBar />
          <Switch>

            <Content>

              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/users'>
                <UserList users_data={users_data} setUsersData={setUsersData} />
              </Route>
              <Route path='/user/:id'>
                <SingleUser users_data={users_data} />
              </Route>
              <Route path='/create/new'>
                <AddUser />
              </Route>
              <Route path='/products'>
                <ProductList products_data={products_data} setProductsData={setProductsData} />
              </Route>
              <Route path='/product/:id'>
                <SingleProduct products_data={products_data} />
              </Route>
              <Route path='/AddProduct'>
                <AddProduct />
              </Route>
            </Content>
          </Switch>

        </HomeContainer>

      </Router>
    </div>
  );
}

export default App;
const HomeContainer = styled.div`
display:flex;
`
const Content = styled.div`
flex:4;
`
