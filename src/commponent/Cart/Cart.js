import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    console.log(cart);
    let total=0;
    let shipping=0;
    for(const product of cart)
    {
        total=total + product.price;
        shipping=shipping + product.shipping;
    }
    const tax= parseFloat((total*.1).toFixed(2));
    const grandTotal= total +shipping+tax;
    return (
        <div className='cart'>
         <h1>order summary:</h1>
        <p>Selected items:{cart.length}</p>
        <p>Total Price: ${total} </p>
        <p>Total Shipping:${shipping} </p>
        <p>Total Tax:${tax}</p>
        <h5>Grand Total: ${grandTotal} </h5>
        </div>
    );
};

export default Cart;