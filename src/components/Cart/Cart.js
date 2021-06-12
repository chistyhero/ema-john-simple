import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
        
    let total = 0;
    for (let i = 0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price*product.quantity;
        
    }

    let shipping = 0;

    if (total>150){
        shipping =0;
    }
    else if (total>15){
        shipping = 4.66;
    }
    else if (total>0){
        shipping =12.99;
    }


    const tax = (total/10).toFixed(2);
    const grandTotal = (shipping+total+Number(tax)).toFixed(2);
    

   const formatNumber = num => {
       const precision = num.toFixed(2);
       return Number (precision);
   }

    return (
        <div>
            <h3>Order Summary:</h3>
            <h4>Items ordered:{cart.length} </h4>
            <h4>Total Price: ${formatNumber(total)}</h4>
            <h4>shipping charge:${shipping}</h4>
            <h4>Tax + VAT (3%):${tax}</h4>
            <h4>Grand Total:${grandTotal}</h4>
            <br/>
            {
                props.children
            }
        </div>
    );
};

export default Cart;