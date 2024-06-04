import React, { useEffect, useState } from 'react'
import "./About.css"

const About = () => {
  const [spin, setSpin] = useState(true)

  useEffect(() => {

    setTimeout(() => {

      setSpin(false)

    }, 1500)
  }, []);

  useEffect(() => {
    window.AOS.init({ // Initialization
      duration: 2000
    });
  });
  return (
    <>
      {
        spin ? <div className='d-flex justify-content-center align-items-center' style={{ height: "85vh" }}> <div className="spinner-grow text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> </div> :
      <div className='container'>
        <div className=' row mb-5 inner-div'>
          <div className=' col-md-6 about-left-div' data-aos="fade-up">
            <h1>About Me</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className=' col-md-6 about-right-div' data-aos="fade-down">
            <img src='imgs/bg.png' alt='hello' />
          </div>
        </div>
      </div>
}
    </>
    
  )
}

export default About
