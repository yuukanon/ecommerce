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
      cartArray:[],
      totalPrice:0 
    }
  }

  componentDidMount() {
    fetch (`https://floating-temple-56492.herokuapp.com/products`)
      .then(res => res.json())
      .then(data => this.setState({ products: data }))
  }

  handleAddToCart = (clickedItem) => {
    const { cartArray, totalPrice } = this.state

    let isInCart = cartArray.find(item => clickedItem.id === item.id);

    if (isInCart) {
      isInCart.quantity++
    } else {
      isInCart = {...clickedItem, quantity: 1}      
      this.setState({ cartArray: [...cartArray, isInCart] })
    }

    this.setState({
      totalPrice: totalPrice + clickedItem.product_price
    })

  }

  handleClearCart = () => {
    this.setState({
      cartArray: [],
      totalPrice: 0
    })
  }

  render () {
    // console.log(this.state.cartArray)
    const { products, totalPrice, cartArray } = this.state
    return (
      <div className="App">
         <Navbar totalPrice={totalPrice} />
          <Switch>
            <Route exact path='/' render={() => <Home products={products}/>} />
            <Route path='/cart' render={() => <Cart handleClearCart={this.handleClearCart} totalPrice={totalPrice} cartArray={cartArray} />} />
            <Route path='/product/:id' render={(routeProps) => <ProductDescription handleAddToCart={this.handleAddToCart} routeProps={routeProps} products={products}/>}/>
          </Switch>
         
      </div>
    );
  }
}

export default App;


// https://floating-temple-56492.herokuapp.com/products