import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart,} from '@fortawesome/free-solid-svg-icons'
import ReviewItems from '../ReviewItems/ReviewItems';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCartData] = useState([]);
    const [placeOrder, setPlaceOrder] = useState(false);
     
    const handleOrder = () => {
        setCartData([]);
        setPlaceOrder(true);
       processOrder();
    }

 
    
    const removeProduct = (productKey)=>{
        const newCart = cart.filter(pd=>pd.key !==productKey);
        setCartData(newCart)
        removeFromDatabaseCart(productKey)
    }

    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const cartProducts = productKeys.map(key =>{
            const product = fakeData.find(pd=> pd.key === key);
            product.quantity =saveCart[key];
            return product;
        });
        setCartData(cartProducts);
    },[]);

    let thankYou;
    if (placeOrder){
        thankYou = <img src={happyImage} alt=""/>
    }
 
    return (
        <div className="twin-container">
            
           <div className="product-container">
           {
               cart.map(pd=><ReviewItems
                 key={pd.key}
                 product={pd}
                 removeProduct={removeProduct}
               ></ReviewItems>)
           }
           {
               thankYou
           }
           
           </div>
           <div className="cart-container">
                <Cart cart={cart}>
                 
            <button onClick={handleOrder} className="main-button"><FontAwesomeIcon icon={faShoppingCart}/>Place Order</button>
             
                </Cart>
                
                
           </div>
        </div>
    );
};

export default Review;