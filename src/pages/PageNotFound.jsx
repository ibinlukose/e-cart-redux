import React from 'react'
import { Link } from 'react-router-dom'


function PageNotFound() {
  return (
    
       <div style={{height:'90vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <img className='w-25' src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-404-error-page-png-image_1362453.jpg" alt=" page not found" />
      <h1 className='my-5' >WE ARE SORRY, LOOK LIKE YOU ARE LOST</h1>
      <Link to={'/'} className='btn btn-dark' >BACK TO HOME </Link>
    </div>
    
  )
}

export default PageNotFound
