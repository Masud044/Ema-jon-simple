import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';
const Product = (props) => {

    const { img, name, seller, price, ratings } = props.product;
    const handler = props.handler;



    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturing :{seller}</p>
                <p>Ratings:{ratings}</p>
            </div>
            <button onClick={() => handler(props.product)} className='btn'>Add card
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;