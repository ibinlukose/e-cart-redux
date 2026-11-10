import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../redux/slices/productSlice';
import Header from '../Componenets/Header';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Products() {

const {loading,allProducts,error} = useSelector(state=>state.productReducer)

const dispatch = useDispatch()


const [currentPage,setCurrentPage] = useState(1)
const productPerpage = 8
const totalPages = Math.ceil(allProducts?.length/productPerpage)
const currentPageLastIndex = currentPage * productPerpage
const currentPageFirstIndex = currentPageLastIndex - productPerpage
const visibleProductArray = allProducts?.slice(currentPageFirstIndex,currentPageLastIndex)

const navigateNextPage = ()=>{
  currentPage != totalPages && setCurrentPage(currentPage+1)
}
const navigatePrevPage = ()=>{
  currentPage != 1 && setCurrentPage(currentPage-1)
}

useEffect(()=>{
dispatch(getAllProducts())
},[])

  return (
    <>
    <Header insideProduct />
    <div className='m-5'>
        {
          loading?
          <div  className='text-center py-5 fw-bolder' >loading...</div>

          :
          <div className='row' >
            {
              allProducts.length>0?
            visibleProductArray.map(product=>(
               <div className='col-lg-3'>
    <Card key={product?.id} className='shadow my-5 ' >
      <Card.Img  style={{height:"250px"}} variant="top" src={product?.thumbnail} />
      <Card.Body  className='text-center' >
        <Card.Title>{product?.title}</Card.Title>

        <Link to={`/products/${product?.id}`}   className='btn btn-primary' >view more</Link>
        

      </Card.Body>
    </Card>

            

            </div>
             ))
            :
            <div className='fw-bolder'>no products found</div>
            }


        </div>
        }
        <div className='text-center my-5 fs-2 fw-bolder ' >
          <button onClick={navigateNextPage} className='btn' ><FontAwesomeIcon icon={faForward} /></button>
          {currentPage} of {totalPages}
          <button onClick={navigatePrevPage} className='btn' ><FontAwesomeIcon icon={faBackward} /></button>

        </div>
      
    </div>
    </>
  )
}

export default Products
