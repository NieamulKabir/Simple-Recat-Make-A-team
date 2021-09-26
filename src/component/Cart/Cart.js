import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const president of cart) {
        total = total + president.salary;
    }
    return (
        <div className="cart">
            <h2><i class="fas fa-users"></i>Cart</h2>
            <h3>No Of President: {props.cart.length}</h3>
            <p>Total :${total}</p>
        </div>
    );
};

export default Cart;