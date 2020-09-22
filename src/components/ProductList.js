import React from "react";
import ProductCard from "./ProductCard";
import { Link } from 'react-router-dom';


const ProductList = ({ products }) => {
  // console.log(products)
  return (
    <div className="productList">
      { products.map(product => <Link to={`/product/${product.id}`}><ProductCard productInfo={product}/></Link>)}
    </div>
  )
}

export default ProductList;