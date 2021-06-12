import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {producykey} = useParams();
    const product = fakeData.find( pd=> pd.key === producykey)
    console.log(product)
    return (
        <div>
            <h1>Your Product Details</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;