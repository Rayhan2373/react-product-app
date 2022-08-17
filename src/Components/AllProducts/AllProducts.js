import React, { useEffect, useState } from 'react';
import Search from '../SearchProduct/Search';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Allproducts.css'

const AllProducts = ({cart}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    return (
        <div>
            <Search></Search>
            <h1 className='m-3'> Choose the Product</h1>
            <div className="row m-1">
                {
                    products.map(product => <SingleProduct cart={cart} product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;