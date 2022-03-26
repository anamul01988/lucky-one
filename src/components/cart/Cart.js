import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    return (
        <div className='cart'>
             <h2 className='fs-4 my-3'>Selected Course</h2>
          {
             cart.map((item) => ( 
                <h5 className='course-name'> {item.name}</h5>
             ))
          }
          <div className='button-section d-flex justify-content-around'>
          <button onClick={()=>props.singleCart()} className=" btn custome-btn btn-block btn-sm mt-3 py-2 px-2">Single course</button>
          <button onClick={()=>props.resetCart()} className=" btn custome-btn btn-block btn-sm mt-3 ">Reset</button>
          </div>
           
        </div>
    );
};

export default Cart;