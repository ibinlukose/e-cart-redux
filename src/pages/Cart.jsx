import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Componenets/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCart, emptyCart, incrementCart, removeCartitem } from '../redux/slices/cartSlice'
import Swal from 'sweetalert2'

function Cart() {

  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const [cartTotal,setCartTotal]= useState(0)
  const navigate = useNavigate()

  useEffect(()=>{
    setCartTotal(userCart?.reduce((acc,curr)=>acc+curr.totalPrice,0))
  },[userCart])

  const handleDecrementCart = (product)=>{
    if(product.quantity>1){
      dispatch(decrementCart(product.id))
    }else{
      dispatch(removeCartitem(product.id))
    }
  }

  const handleCheckout = ()=>{
    dispatch(emptyCart())
    Swal.fire({
      title:"order placed successfully",
      text:"thank you for purchasing with us",
      icon:"success",
      confirmButtonText:"ok"
    })
    navigate('/')
  }



  return (
    <>
   
    <Header/>
     {
      userCart?.length>0  ?
      <div className='container my-5'>
       <h1 className='fw-bold text-primary pt-5'>User's cart</h1>
      <div className='row'>
        <div className='col-lg-8'>
          <table className='table' >
            <thead>
              <tr>
                <th>#</th>
                <th>product</th>
                <th>image</th>
                <th>quantity</th>
                <th>price</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
             {
              userCart.map((item,index)=>(
                 <tr key={item?.id} >
                <td>{index+1}</td>
                <td>{item?.title}</td>
                <td> <img width={"50px"}  src={item?.thumbnail} alt="no image" /></td>
                <td> 
                  <div className='d-flex'>
                    <button onClick={()=>dispatch(handleDecrementCart(item))} className='btn fs-1'>-</button>
                    <input style={{width:"40px"}} type="text" value={item?.quantity} className='form-control' readOnly />
                    <button onClick={()=>dispatch(incrementCart(item?.id))} className='btn fs-1' >+</button>
                  </div>
                </td>
                <td>${item?.totalPrice}</td>
                <td><button onClick={()=>dispatch(removeCartitem(item?.id))} className='btn text-danger fs-1'>X</button> </td>
              </tr>
              ))
             }
            </tbody>

          </table>
          <div className='float-end p-3'>
            <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger' >EMPTY CART</button>
            <Link to={"/"} className='btn btn-info ms-5' >SHOP MORE</Link>
          </div>

        </div>
        <div className='col-lg-4'>
          <div className='border shadow rounded p-5 '>
            <h3>Total Amount : <span className='text-danger'>${cartTotal}</span></h3>
            <hr />
            <button onClick={handleCheckout} className='btn btn-success w-75' >CHECKOUT</button>

          </div>

        </div>

      </div>
      
    </div>
    
    :
    //empty cart
     <div className='d-flex justify-content-center align-items-center flex-column'>
              <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1xO7StnA5hWcw2RpbNh66FBF1pG21yg2YsT9wrjX89A&s=10" alt="" />
              <h1>your wishlist is empty</h1>
              <Link to={'/'} className='btn btn-primary' >add more</Link>
    
            </div>
            }
    </>
  )
}

export default Cart
