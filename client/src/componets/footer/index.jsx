import React from 'react'
import image1 from '../../assets/img/picture/products/footer/image1.svg'
import image2 from '../../assets/img/picture/products/footer/image2.svg'
import image3 from '../../assets/img/picture/products/footer/image3.svg'
import logo from '../../assets/img/icon/logo.svg'
import addres1 from '../../assets/img/picture/products/footer/addres1.svg'
import call2 from '../../assets/img/picture/products/footer/call2.svg'
import email3 from '../../assets/img/picture/products/footer/email3.svg'
import hours4 from '../../assets/img/picture/products/footer/hours4.svg'

import './style.scss'

const Footer = () => {
  return (
    <div className="footer-category">

      <div className="cards-wrapper">
        <div className="card">
          <img src={image1} alt="" />
          <div className="card-txt">
            <h3>Best Prices & Deals</h3>
            <p>Don’t miss our daily amazing deals and prices</p>
          </div>
        </div>

        <div className="card">
          <img src={image2} alt="" />
          <div className="card-txt">
            <h3>Refundable </h3>
            <p>If your items have damage we agree to refund it</p>
          </div>
        </div>

        <div className="card">
          <img src={image3} alt="" />
          <div className="card-txt">
            <h3>Free delivery</h3>
            <p>Do purchase over $50 and get free delivery anywhere</p>
          </div>
        </div>
      </div>

      <div className="line"></div>

        <footer>
          <div className="footer-cards">
            <div className="logo">
              <img src={logo} alt="" />
              <div className="logo-txt">
                <h3>Groceyish</h3>
                <p>GROCERY</p>
              </div>

            </div>

            <div className="card-logo">
              <div className="txt">
                <img src={addres1} alt="" />
                <p>Address:1762 School House Road</p>
              </div>
              <div className="txt">
                <img src={call2} alt="" />
                <p>Call Us:1233-777</p>
              </div>
              <div className="txt">
                <img src={email3} alt="" />
                <p>Email:groceyish@contact.com</p>
              </div>
              <div className="txt">
                <img src={hours4} alt="" />
                <p>Work hours:8:00 - 20:00, Sunday -  Thursday</p>
              </div>


            </div>
          </div>


          <div className="cards">
            <div className="card">
              <h3>Account</h3>
              <div className="card-txt">
                <p>Wishlist</p>
                <p>Cart</p>
                <p>Track Order</p>
                <p>Shipping Details</p>
              </div>
            </div>
            <div className="card">
              <h3>Useful links</h3>
              <div className="card-txt">
                <p>About Us</p>
                <p>Conact</p>
                <p> Promotions</p>
                <p>New products</p>
                <p>New products</p>
              </div>
            </div>
            <div className="card">
              <h3>Help Center</h3>
              <div className="card-txt">
                <p>Payments</p>
                <p>Refund</p>
                <p>Checkout </p>
                <p>Shipping </p>
                <p>Q&A</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>


          

        


        </footer>
      </div>


  )

}

export default Footer