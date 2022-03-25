import React, { useEffect, useState } from 'react';
import CourseList from '../courseList/CourseList';
import './Home.css';
const Home = () => {
    const[courses,setCourses]=useState([]);
useEffect(()=>{
    fetch('./fakeData.JSON')
    .then(res=>res.json())
    .then(data=>setCourses(data))
    //  .then(data=>console.log(data))
},[]);

 
    return (
      <>
        <div className="container">
                <div className="home-content">
                    <div className="row">
                       <div className="col-sm-12 col-md-3">
                           <div className="row">
                           {
                               courses.map(course => <CourseList course={course}>

                               </CourseList>)
                            }

                           </div>

                        </div>
                        <div className="col-md-3 sidebar">
                            <div className="row">
                                <div className=" col-sm-12 col-md-12">
                                
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default Home;