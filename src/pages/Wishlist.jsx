import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Header from '../Componenets/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeWishlistItem } from '../redux/slices/wishlistSlice';
import Swal from 'sweetalert2'
import { addCart } from '../redux/slices/cartSlice'




function Wishlist() {
  const userWishlist= useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()
    const userCart = useSelector(state=> state.cartReducer)


  const handleCart = (product)=>{
    //check the product already in the cart
    const existingItem = userCart?.find(item=>item?.id==product.id)
    dispatch(addCart(product))
    dispatch(removeWishlistItem(product.id))
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
    <div className='container my-5'>
      {userWishlist?.length>0 ?
      <>
      <h1 className='fw-bold text-primary pt-5'>User's wishlist</h1>
      <div className='row pt-5' >
        {/*duplicate column accprding to products*/}
           {
            userWishlist?.map(item=>(
             <div className='col-lg-3'>
    <Card className='shadow my-5 ' >
      <Card.Img  style={{height:"250px"}} variant="top" src={item?.thumbnail}/>
      <Card.Body  className='text-center' >
        <Card.Title>{item?.title}</Card.Title>
        <div className='d-flex justify-content-evenly'>

          <button onClick={()=>dispatch(removeWishlistItem(item?.id))} className='btn text-danger fs-4' ><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
          <button onClick={()=>handleCart(item)} className='btn text-success fs-4' ><FontAwesomeIcon icon={faCartPlus} /></button>

        </div>

        
        

      </Card.Body>
    </Card>

            

            </div>
            ))
           }

        </div>
        </>
        :
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1xO7StnA5hWcw2RpbNh66FBF1pG21yg2YsT9wrjX89A&s=10" alt="" />
          <h1>your wishlist is empty</h1>
          <Link to={'/'} className='btn btn-primary' >add more</Link>

        </div>

      }
      
    </div>
    </>
  )
}

export default Wishlist
