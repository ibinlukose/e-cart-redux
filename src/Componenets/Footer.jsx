import React from 'react'


function Footer() {
  return (

     <footer className="bg-primary text-white p-4">
      <div className="row">

        <div className="col-lg-3">
          <h5> DailyCart</h5>
          <p>Designed and built with all the love in the world.</p>
          <p>Code licensed Luminar, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>

        <div className="col-lg-3">
          <h5>Links</h5>
          <p>Home</p>
          <p>Wishlist</p>
          <p>Cart</p>
        </div>

        <div className="col-lg-3">
          <h5>Guides</h5>
          <p>React</p>
          <p>React Bootstrap</p>
          <p>React Router</p>
        </div>

        <div className="col-lg-3">
          <h5>Contact Us</h5>
          <input
            type="email"
            placeholder="Email Here"
            className="form-control"
          />

          <div className="d-flex gap-3 mt-3">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-square-instagram"></i>
           
          </div>
        </div>

      </div>

      <div className="text-center mt-4">
        <p>
          Copyright © August 2025 Batch, Daily Cart.
          Built with React Redux.
       </p>
      </div>
    </footer>
  )
}

export default Footer
