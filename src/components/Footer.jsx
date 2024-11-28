import React from 'react'
import footer_icon from "../pictures/binance_coin_bnb_crypto_icon_264375.png";
import "./footer.css"

export default function Footer() {
  return (
    <div className='footer'>
      <img src={footer_icon} alt="" className='footer_pic'/>
      <div className="contact">
        <h3>Contact Us</h3>
        <p>Phone : +79223114512</p>
        <p>Email : create@gmail.com</p>
        <p>Telegram : @create</p>
      </div>
    </div>
  )
}
