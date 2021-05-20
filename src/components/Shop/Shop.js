import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import '../Shop/Shop.css';

const Shop = () => {
    const products10 = fakeData.slice(0, 20);
    const [products, setProducts] = useState(products10)
    const [cart, setCart] = useState([]);

    const productHandler = (product) => {
     const newCart = [...cart, product];
     setCart (newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">


                {
                    products10.map(prod => <Product 
                        productHandler ={productHandler}
                        product={prod} 
                        
                        ></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};
export default Shop;