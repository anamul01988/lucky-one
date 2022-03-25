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
    //  .then(data=>console.log(data))
},[]);


const handleAddCart = (course)=>{
     console.log("product added",course);
      const newCart = [...cart,course];
      setCart(newCart);

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
                                    <h2>Selected Course</h2>
                                     <Cart cart = {cart}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default Home;