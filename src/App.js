import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

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
        <ProductList products={products} />
      </div>
    );
  }
}

export default App;


// https://floating-temple-56492.herokuapp.com/products