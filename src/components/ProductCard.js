import React from "react";
import StarRatings from 'react-star-ratings';



const ProductCard = ({productInfo}) => {
  
  return (
    <div className="productCard">
      <img src={productInfo.product_image} alt=""/>
        <p>{productInfo.product_title}</p>
        <p>{productInfo.product_price} Euro</p>
        <StarRatings 
          rating={productInfo.product_rating} 
          starRatedColor="green"
          starDimension="20px"
        />
    </div>
  )
}

export default ProductCard;

// https://github.com/ertanhasani/react-stars#readme