import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Componenets/Header'

function Cart() {
  return (
    <>
    <Header/>
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
              <tr>
                <td>1</td>
                <td>product</td>
                <td> <img width={"50px"} height={"50px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg34Yqt7j7XsCPcqu_yDEnFX5I3uM1RXXBb9qHGtn-Mw&s=10" alt="" /></td>
                <td> 
                  <div className='d-flex'>
                    <button className='btn fs-1'>-</button>
                    <input style={{width:"40px"}} type="text" value={10} className='form-control' readOnly />
                    <button className='btn fs-1' >+</button>
                  </div>
                </td>
                <td>$ 30</td>
                <td> </td>
              </tr>
            </tbody>

          </table>
          <div className='float-end p-3'>
            <button className='btn btn-danger' >EMPTY CART</button>
            <Link to={"/"} className='btn btn-info ms-5' >SHOP MORE</Link>
          </div>

        </div>
        <div className='col-lg-4'>
          <div className='border shadow rounded p-5 '>
            <h3>Total Amount : <span className='text-danger'>$300</span></h3>
            <hr />
            <button className='btn btn-success w-75' >CHECKOUT</button>

          </div>

        </div>

      </div>
      
    </div>
    </>
  )
}

export default Cart
