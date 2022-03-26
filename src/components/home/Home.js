import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import CourseList from '../courseList/CourseList';
import './Home.css';
const Home = () => {
    const[courses,setCourses]=useState([]);
    const [cart, setCart]=useState([]);
    const [reset, setReset] = useState([""]);
useEffect(()=>{
    fetch('./fakeData.JSON')
    .then(res=>res.json())
    .then(data=>setCourses(data))
    //  .then(data=>console.log(data))
},[]);

const singleCart =(course)=>{
    console.log("single added",course)
    const newCart = cart.length>0 ? cart[Math.ceil(Math.random()*cart.length)]: [];
    setCart([newCart]);
}
// const resetCourse = (reset)=>{
//     console.log('reset',courses)
//     setReset(" ");
// }

const handleAddCart = (course)=>{
    if(cart.length < 4){
        console.log("product added",course);
        const newCart = [...cart,course];
        setCart(newCart);
    }
    else{
        // console.log("cross the limit")
        alert('you have crossed your limit.')
    }
    // const limitPurchase = cart.find(courses => courses.id === course.id);
    // if(!limitPurchase){
    //     if(cart.length < 4){
    //         console.log("product added",course);
    //         const newCart = [...cart,course];
    //         setCart(newCart);
    //     }
    //     else{
    //         console.log("cross the limit")
    //     }
    // }

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
                                         <Cart cart = {cart} singleCart={singleCart}/>

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