import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop'>
            <div className='product-container'>
                
                    {products.map(pd => <Product 
                    key={pd.id}
                    product={pd}
                    addToCart={addToCart}
                    ></Product>)} 
                
            </div>
    

            <div className='order-container'>
                <h4>Order Summary</h4>
                <p>Selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;