import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className='m-5'>
        <div className='row' >
            <div className='col-lg-3'>
    <Card className='shadow' >
      <Card.Img  style={{height:"250px"}} variant="top" src="holder.js/100px180" />
      <Card.Body  className='text-center' >
        <Card.Title>Card Title</Card.Title>

        <Link to={`/products/:id`}   className='btn btn-primary' >view more</Link>
        

      </Card.Body>
    </Card>

            

            </div>

        </div>
      
    </div>
  )
}

export default Products
