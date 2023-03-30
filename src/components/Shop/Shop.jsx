import React, { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([]);

    const [card,setCard]= useState([]);
    useEffect(()=>{
         fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
         .then(res=>res.json())
         .then(data=>setProducts(data))
    },[])

    const handler=(product)=>{
        const newCard = [...card,product];
        setCard(newCard);

    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
               
                {
                    products.map(product=>
                        <Product  
                          key={product.id}
                          product={product}
                          handler={handler}
                         
                        ></Product> )
                }
            </div>
            <div className='card-container'>
                 <h2>order summary</h2>
                 <p>Selected items : {card.length}</p>
            </div>
        </div>
    );
};

export default Shop;