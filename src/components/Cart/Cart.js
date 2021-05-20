import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    return (
        <div>
            <h3>Order Summary:</h3>
            <h4>Items ordered:{cart.length} </h4>
        </div>
    );
};

export default Cart;