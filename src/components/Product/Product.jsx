import React from 'react';
import './Product.css';
const Product = (props) => {

 const { img,name,seller,price,ratings }= props.product;
  
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturing :{seller}</p>
            <p>Ratings:{ratings}</p>
           </div>
           <button className='btn'>Add card</button>
        </div>
    );
};

export default Product;