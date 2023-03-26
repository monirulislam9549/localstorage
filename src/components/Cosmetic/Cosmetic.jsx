import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../utilities/fakedb';
import './Cosmetic.css';
const Cosmetic = (props) => {
    // console.log(props);
    const { name, price, id } = props.cosmetic;
    const addToCart = (id) => {
        addToDb(id)
    }

    const removeFromCart = (id) => {
        removeFromDb(id)
    }
    const deleteAllCart = (id) => {
        deleteShoppingCart(id)
    }
    return (
        <div className='product'>
            <p>Name: {name}</p>
            <p>Price:{price}</p>
            <p>ID: {id}</p>
            <button onClick={() => addToCart(id)}>Add To Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove From Cart</button>
            <button onClick={() => deleteAllCart(id)}>Delete all</button>
        </div>
    );
};

export default Cosmetic;