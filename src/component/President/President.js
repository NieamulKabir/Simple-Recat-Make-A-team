import React from 'react';
import './President.css'
const President = (props) => {
    const { name, age, spouse, img, country, salary } = props.president;
    return (
        <div className="president_container">
            <div className="president_img">
                <img src={img} alt="" />
            </div>
            <div>
                <h3>Name : {name}</h3>
                <h4>Country : {country}</h4>
                <h6>Salary : {salary}</h6>
                <small>Age : {age}</small>
                <p><small>Spouse : {spouse}</small></p>

                <button
                    onClick={() => props.handleAddToCart(props.president)}
                    className="btn-regular"
                ><i class="fas fa-cart-plus"></i>  Add Salary</button>

                <div className="social_icon">
                    <i class="fab fa-facebook-square"></i> 
                    <i class="fab fa-github"></i>
                </div>

            </div>


        </div>
    );
};

export default President;