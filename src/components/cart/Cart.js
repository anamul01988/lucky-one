import React from 'react';
import './Cart.css';
const Cart = (props) => {
    // console.log(props.cart)
    const {cart} = props;
    // const instructorName;
    for(const course of cart){
        // console.log(course.name)
        // instructorName= course.name;
    }
    return (
        <div>
          {
             cart.map((item) => (
                <h5>Name: {item.name}</h5>
              ))
          }
            {/* <p>{instructorName}</p> */}
        </div>
    );
};

export default Cart;