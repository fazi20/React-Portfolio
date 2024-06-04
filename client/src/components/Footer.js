import React from 'react'
import "./Footer.css"

const Footer = () => {
  let date = new Date().getFullYear()
  return (
    <>
      <div className='footer '>
        <div className='container  footer-container'>
          <div className='row pt-5 '>
            <div className='col-md-4 mb-4'>
              <h2>Faizan</h2>
              <p>&copy; {date} Faizan All Rights reserved</p>
            </div>

            <div className='col-md-4 mb-4'>
              <h2>Get In Touch</h2>
              <p>Amet deserunt aute laborum laborum eu voluptate eu officia ullamco reprehenderit ad cupidatat ex ad.   </p>
              <p>hi.faizansadiq@gmail.com</p>
              <p>+923039646119</p>
            </div>

            <div className='col-md-4'>
              <h2>About</h2>
              <p>Resume</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
