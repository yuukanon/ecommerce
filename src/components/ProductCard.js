import React from "react";
import StarRatings from 'react-star-ratings';



const ProductCard = ({productInfo}) => {
  console.log(productInfo)
  
  return (
    <div className="productCard">
      <img src={productInfo.product_image} alt=""/>
        <p>{productInfo.product_title}</p>
        <p>{productInfo.product_price} Bottlecaps</p>
        <StarRatings 
          rating={productInfo.product_rating} 
          starRatedColor="yellow"
          starDimension="20px"
        />
    </div>
  )
}

export default ProductCard;

// https://github.com/ertanhasani/react-stars#readme