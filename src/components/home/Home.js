import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import CourseList from '../courseList/CourseList';
import './Home.css';
// import Modal from 'react-modal';
// // const customStyles = {
// //     content: {
// //       top: '50%',
// //       left: '50%',
// //       right: 'auto',
// //       bottom: 'auto',
// //       marginRight: '-50%',
// //       transform: 'translate(-50%, -50%)',
// //     },
// //   };
//   Modal.setAppElement('#root');
const Home = () => {
    const[courses,setCourses]=useState([]);
    const [cart, setCart]=useState([]);
    // const [modalIsOpen, setIsOpen] = useState(false);


    // function openModal() {
    //     setIsOpen(true);
    //   }
    
    //   function closeModal() {
    //     setIsOpen(false);
    //   }
    



useEffect(()=>{
    fetch('./fakeData.JSON')
    .then(res=>res.json())
    .then(data=>setCourses(data))
    //  .then(data=>console.log(data))
},[]);

const singleCart =()=>{
    // console.log("single added",course)
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
                                {/* <button onClick={openModal}>Open Modal</button> */}
                                   {
                                         <Cart cart = {cart} singleCart={singleCart} resetCart = {resetCart}/>

                                   }


                                        {/* <Modal
                                                isOpen={modalIsOpen}
                                                onRequestClose={closeModal}
                                                style={customStyles}
                                                contentLabel="Example Modal"
                                            > Course
                                        </Modal> */}


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default Home;