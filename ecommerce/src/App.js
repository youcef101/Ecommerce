import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/category'>
            <ProductList />
          </Route>
          <Route path='/productDetail'>
            <ProductDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
