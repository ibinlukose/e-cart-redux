import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Header from '../Componenets/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addCart } from '../redux/slices/cartSlice'



function View() {

const {id} = useParams()
console.log(id);
const {allProducts} = useSelector(state=>state.productReducer)
const[product,setProduct] = useState({})
const userWishlist = useSelector(state=>state.wishlistReducer)
const userCart = useSelector(state=> state.cartReducer)
const dispatch = useDispatch()

useEffect(()=>{
  setProduct(allProducts?.find(item=>item.id==id))
},[])
console.log(product);

const handleWishlist = ()=>{
  //check the product already in the cart
  const existingItem = userWishlist?.find(item=>item.id==product.id)
  if(existingItem){
    Swal.fire({
      title:"sorry",
      text:"product already in your wishlist",
      icon:"error",
      confirmButtonText:"ok"
    })
  }else{
    dispatch(addToWishlist(product))
  }
}

const handleCart = ()=>{
  //check the product already in the wishlist
  const existingItem = userCart?.find(item=>item?.id==product.id)
  dispatch(addCart(product))
 Swal.fire({
  title:"success",
  text:existingItem? `${existingItem.title} quantity incremented`: "product added to your cart",
  icon:"success",
  confirmButtonText:"ok"
 })
}



  return (
    <>
    <Header/>
    <div className='container my-5  pt-5'>
      <div className='row align-items-center' > 
        <div className="col-lg-6 text-center ">

          <img className='img-fluid ' src={product?.thumbnail} alt="product" />
             
             <div className='d-flex justify-content-evenly mt-5'>
              <button onClick={handleWishlist} className='btn btn-info' > ADD TO WISHLIST</button>
              <button onClick={handleCart} className='btn btn-success' >ADD TO CART</button>
              </div>
        </div>

        <div className="col-lg-6">

          <h3 className='fw-bold' >{product?.title}</h3>
          <h2  className='fw-bold'>$ {product?.price}</h2>
          <h4  className='fw-bold'>Brand :{product?.brand}</h4>
          <h4  className='fw-bold'>Category:{product?.category}</h4>
          <h4  className='fw-bold'>Description:{product?.description}</h4>
          <h5  className='fw-bold'>Client Reviews</h5>

          {
            product?.reviews?.map((item,index)=>(
              <div key={index} className='border rounded shadow my-5'>

            <p><span className='fw-bolder'>Name:{item?.reviewerName}</span>{item?.comment}</p>
            <p> Rating:{item?.rating}<FontAwesomeIcon icon={faStar} className='text-warning' /></p>

          </div>
            ))
          }
          

        </div>

      </div>
      
    </div>
    </>
  )
}

export default View
