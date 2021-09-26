import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import President from '../President/President';
import './Presidents.css'

const Presidents = () => {
    const [presidents, setPresidents] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./president.json')
            .then(res => res.json())
            .then(data => setPresidents(data))
    }, [])

    const handleAddToCart = (president) => {
        const newcart = [...cart, president];
        setCart(newcart);
    }

    return (
        <div className="row">
            <div className="col-lg-9">
                <div className="presidents">
                    {
                        presidents.map(president => <President
                            key={president.id}
                            president={president}
                            handleAddToCart={handleAddToCart}
                        >
                        </President>)
                    }
                </div>
            </div>


            <div className="col-lg-3">
                <Cart cart= {cart}></Cart>
                
            </div>

        </div>
    );
};

export default Presidents;