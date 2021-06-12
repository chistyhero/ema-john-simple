import React from 'react';

const ReviewItems = (props) => {
    const { name, quantity, key, price, img} = props.product;
    const reviewItemsStyle = {
        borderBottom:'1px solid red',
        marginBottom:'5px',
        padding:'5px',
        marginLeft:'200px'
    }
    return (
        <div style={reviewItemsStyle} className="review-item">
            <img src={img} alt=""></img>
            <h3 className="product-name">{name}</h3>
            <h4>Product Quantity:{quantity}</h4>
            <h4>Price:{price}</h4>
            <button className="main-button"
            onClick={()=> props.removeProduct(key)}
            >Remove</button>

        </div>
    );
};

export default ReviewItems;