
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './pages/Products'
import View from './pages/View'
import Wishlist from './pages/Wishlist'
import PageNotFound from './pages/PageNotFound'
import Cart from './pages/Cart'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     
      <Routes>
        <Route path='/' element={<Products/>} />
          <Route path='/products/:id' element={<View/>} />
           <Route path='/Cart' element={<Cart/>} />
            <Route path='/Wishlist' element={<Wishlist/>} />
              <Route path='/*' element={<PageNotFound/>} />


      </Routes>
             
  
    </>
  )
}

export default App
