import styled from 'styled-components';
import './App.css';
import SideBar from './components/SideBar';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import UserList from './pages/UserList';
import SingleUser from './pages/SingleUser';
import { products_rows, users_rows, categories_rows } from './dummyData.js'
import { useState } from 'react';
import AddUser from './pages/AddUser';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import AddProduct from './pages/AddProduct';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import CategoryList from './pages/CategoryList';
import SingleCategory from './pages/SingleCategory';
import AddCategory from './pages/AddCategory';

function App() {
  const [users_data, setUsersData] = useState(users_rows)
  const [products_data, setProductsData] = useState(products_rows)
  const [categories_data, setCategoriesData] = useState(categories_rows)
  const admin = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).admin)?.current_user?.user?.isAdmin
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login'>
            {admin ? <Redirect to='/' /> : <Login />}
          </Route>
          {admin && <><Topbar />
            <HomeContainer>
              <SideBar />
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
                  <ProductList />
                </Route>
                <Route path='/product/:id'>
                  <SingleProduct products_data={products_data} />
                </Route>
                <Route path='/AddProduct'>
                  <AddProduct />
                </Route>
                <Route path='/categories'>
                  <CategoryList categories_data={categories_data} setCategoriesData={setCategoriesData} />
                </Route>
                <Route path='/category/:id'>
                  <SingleCategory />
                </Route>
                <Route path='/AddCategory'>
                  <AddCategory />
                </Route>
              </Content>


            </HomeContainer>
          </>}
        </Switch>
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
