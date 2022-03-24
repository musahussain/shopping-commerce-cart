import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({product, addToCart}) => {
    const {img, name, price, seller, ratings} = product;

    return (
        <div className='product'>
            <img src={img} alt="product" />
            <div className='product-info'>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Ratings: {ratings} star</small></p>
            </div>
            <button onClick={() => addToCart(product)} className='btn-cart'>
                <p>Add To Cart</p>

                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;