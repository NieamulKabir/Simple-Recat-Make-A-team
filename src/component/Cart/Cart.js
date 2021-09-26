import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props || {};

    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.salary

    const total = cart.reduce(totalReducer, 0).toFixed(2)


    return (
        <div className="cart">
            <h3><i class="fas fa-shopping-cart">Cart</i> </h3>
            <h3>No of President: {cart.length}</h3>
            <h2>{total}</h2>

            <ul>
                {
                    cart.map(president => <li>{president.name}</li>)
                }
            </ul>

        </div>
    );
};


export default Cart;
