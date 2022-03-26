import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import CourseList from '../courseList/CourseList';
import './Home.css';

const Home = () => {
    const[courses,setCourses]=useState([]);
    const [cart, setCart]=useState([]);
  

useEffect(()=>{
    fetch('./fakeData.JSON')
    .then(res=>res.json())
    .then(data=>setCourses(data))
   
},[]);

const singleCart =()=>{

    const newCart = cart.length>0 ? cart[Math.floor(Math.random()*cart.length)]: [];
    setCart([newCart]);
}
const resetCart = ()=>{
    console.log('reset',courses)
    const newCart =  [""];
    setCart([newCart]);
}

const handleAddCart = (course)=>{
    const limitPurchase = cart.find(courses => courses.id === course.id);
    if(!limitPurchase){
        if(cart.length < 4){
            const newCart = [...cart,course];
            setCart(newCart);
        }
        else{
            alert("You cant select more than 4 course at a time.")
        }
    }

  }
    return (
      <>
        <div className="container">
                <div className="home-content">
                    <div className="row">
                       <div className="col-sm-12 col-md-9">
                           <div className="row">
                           {
                               courses.map(course => <CourseList key={course.id} course={course} handleAddCart = {handleAddCart}>

                               </CourseList>)
                            }

                           </div>

                        </div>
                        <div className="col-md-3 sidebar">
                            <div className="row">
                                <div className=" col-sm-12 col-md-12">
                             
                                   {
                                         <Cart cart = {cart} singleCart={singleCart} resetCart = {resetCart}/>

                                   }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default Home;