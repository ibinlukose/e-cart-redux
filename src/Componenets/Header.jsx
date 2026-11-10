import { faCartPlus, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { searchProduct } from '../redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';







function Header({insideProduct}) {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()
  return (
 <Navbar expand="lg" className="bg-primary fixed-top">
      <Container>
        <Navbar.Brand ><Link to={"/"} className='text-light text-decoration-none fw-bold' ><FontAwesomeIcon icon={faTruckFast} /> 
        E-cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           { insideProduct && <Nav.Item>
              <input onChange={e=>dispatch(searchProduct(e.target.value))} type="text" className='form-control ' placeholder='search your products' />
             
            </Nav.Item>}
 <Link to={'/Wishlist'} className='text-light text-decoration-none fw-bold ms-5' ><FontAwesomeIcon icon={faHeart}
  className='btn btn-danger me-2' />  wishlist <Badge pill bg="secondary">{userWishlist?.length}</Badge> </Link>

  <Link to={'/Cart'} className='text-light text-decoration-none fw-bold ms-5' ><FontAwesomeIcon icon={faCartPlus} 
  className='btn btn-success me-2' />  cart <Badge pill bg="secondary">10</Badge> </Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
