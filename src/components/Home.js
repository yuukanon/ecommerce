import React from "react";
import ProductList from "./ProductList";

const Home = ({ products }) => {
  return(
    <div>
      <ProductList products={products} />
    </div>
  )
}

export default Home;