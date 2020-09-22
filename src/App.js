import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import ProductDescription from './components/ProductDescription';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      totalPrice: 0, 
    }
  }

  componentDidMount() {
    fetch (`https://floating-temple-56492.herokuapp.com/products`)
      .then(res => res.json())
      .then(data => this.setState({ products: data }))
  }
  render () {
    const { products, totalPrice } = this.state
    return (
      <div className="App">
         <Navbar totalPrice={totalPrice} />
          <Switch>
            <Route exact path='/' render={() => <Home products={products}/>} />
            <Route path='/cart' component={Cart} />
            <Route path='/product/:id' render={(routeProps) => <ProductDescription routeProps={routeProps} products={products}/>}/>
          </Switch>
         
      </div>
    );
  }
}

export default App;


// https://floating-temple-56492.herokuapp.com/products