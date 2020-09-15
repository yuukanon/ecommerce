import React from "react";
import ProductCard from "./ProductCard"

const ProductList = ({ products }) => {
  // console.log(products)
  return (
    <div>
      { products.map(product => <ProductCard productInfo={product}key={product.id} />)}
    </div>
  )
}

export default ProductList;