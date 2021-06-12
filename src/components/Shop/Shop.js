import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import '../Shop/Shop.css';



const Shop = () => {
    const products10 = fakeData.slice(0, 20);
    const [products, setProducts] = useState(products10)
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey=>{
         const product = fakeData.find(pd=> pd.key === existingKey);
         product.quantity  =savedCart[existingKey];
         return product;
        })
        setCart(previousCart);
    },[])

    const productHandler = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count =1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity =count;
            const others  = cart.filter(pd=> pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity=1;
            newCart =[...cart, product];
        }
        setCart(newCart);

        addToDatabaseCart(product.key, count);

    }
    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    products10.map(prod => <Product
                        showAddToCart={true}
                        productHandler={productHandler}
                        product={prod}

                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <Link to="/review">
            <button className="main-button"><FontAwesomeIcon icon={faShoppingCart} /> Review my order</button>
            </Link>
                </Cart>
            </div>
        </div>
    );
};
export default Shop;