import React from 'react';
import './CourseList.css';
import { FaCartPlus} from 'react-icons/fa';
const CourseList = ({course, handleAddCart}) => {
    const {id, name,img, instructor, payment}=course;
    // console.log(course)
    return (
        <div className="col-sm-12 col-md-4 my-3">
        <div className="custom-card">
          <img src={img} className="custom-img" alt="..." />
          <div className="card-content">
          <h5><span className="mb-2 fw-bold">Id:</span> {id}</h5>
              <h5><span className="mb-2 fw-bold">Course:</span> {name}</h5>
              <p><span className="mb-2 fw-bold">Instructor:</span> {instructor}</p>
              <p><span className="mb-2 fw-bold">Payment:</span> {payment}</p>

          </div>
          <button onClick={()=>handleAddCart(course)} className="cart-btn btn custome-btn btn-block btn-sm mt-3 "> 
                add to cart  < FaCartPlus/> </button>
        </div>
      </div>
    );
};

export default CourseList;