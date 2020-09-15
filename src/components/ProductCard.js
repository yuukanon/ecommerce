import React from "react";
import ReactStars from "./react-rating-stars-component";


const ProductCard = ({productInfo}) => {
  // console.log(productInfo)
  
  return (
    <div>
      <img src={productInfo.product_image} alt=""/>
      <p>{productInfo.product_title}</p>
      <p>"$" {productInfo.product_price}</p>
      <ReactStars 
        count={5}
        rating={productInfo.product_rating} />
    </div>
  )
}

export default ProductCard;

// https://github.com/ertanhasani/react-stars#readme