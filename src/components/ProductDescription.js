import React from "react";
import StarRatings from 'react-star-ratings';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDescription = ({routeProps, products, handleAddToCart}) => {

  const matchProduct = products.find(product => (+routeProps.match.params.id === product.id))

  const notify = () => toast("The product was added to the cart!");

  const handleClick = () => {
    handleAddToCart(matchProduct);
    notify();
  }

  return(
    <div className="productDetails">
      {
        !matchProduct ?
        <p>loading....</p> 
        : 
        <>
          <div>
            <img src={matchProduct.product_image} alt=""/>
            <StarRatings 
              rating={matchProduct.product_rating} 
              starRatedColor="green"
              starDimension="20px"
            />
          </div>
          <div className='productDescription'>
            <h1>{matchProduct.product_title}</h1>
            <p>{matchProduct.product_description}</p>
            <p>{matchProduct.product_price} Euro</p>
            <button onClick={handleClick}>Add to Cart</button>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              />
            <ToastContainer />
          </div>
       </>
      }
      
    </div>
  )
}

export default ProductDescription;

// https://www.npmjs.com/package/react-toastify