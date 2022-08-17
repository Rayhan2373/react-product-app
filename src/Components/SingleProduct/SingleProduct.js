import React from 'react';
import './singleProduct.css'
import Reactmodal from '../React-modal/Reactmodal';

const SingleProduct = ({ product, cart }) => {
    const { title, image} = product

    return (
        <div className='col-md-4 mb-2'>
            <div className='card p-3 border-secondary'>
                <img className='w-50 m-auto hgt' src={image} alt=''></img>
                <h3>{title.slice(0, 20)}</h3>
                <div className='d-flex justify-content-around'>
                    <button onClick={cart} className='btn btn-success p-2'>Add to Cart</button>
                    <button className='btn btn-danger p-2'>Delete</button>
                    <Reactmodal product={product}></Reactmodal>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;