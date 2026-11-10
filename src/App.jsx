
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './pages/Products'
import View from './pages/View'
import Wishlist from './pages/Wishlist'
import PageNotFound from './pages/PageNotFound'
import Cart from './pages/Cart'

import Footer from './Componenets/Footer'


function App() {
  

  return (
    <>
   
      <Routes>
        <Route path='/' element={<Products/>} />
          <Route path='/products/:id' element={<View/>} />
           <Route path='/Cart' element={<Cart/>} />
            <Route path='/Wishlist' element={<Wishlist/>} />
              <Route path='/*' element={<PageNotFound/>} />

            


      </Routes>
             <Footer/>  
  
    </>
  )
}

export default App
