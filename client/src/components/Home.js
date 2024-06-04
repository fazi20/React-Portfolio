import React, { useEffect, useState } from 'react';
// import AOS from "aos";
// import "aos/dist/aos.css";
import "./Home.css"


const Home = () => {
  const [spin, setSpin] = useState(true)

  useEffect(() => {

    setTimeout(() => {

      setSpin(false)

    }, 1500)
  }, [])

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
          <div className='container home-container'>
            <div className=' row mb-5 home-innerdiv'>
              <div className=' col-md-6  left-div ' data-aos="fade-down"    >
                <h2>Welcome To Faizan's Porfolio</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='btns'>
                  <a href='https://github.com/fazi20?tab=repositories' target='blank'><button className='btn1'>Projects</button></a>
                  <a href='https://www.linkedin.com/in/faizan-sadiq/' target='blank'><button className='btn2' >Linkedin</button></a>
                </div>
              </div>
              <div className='right-div col-md-6' data-aos="fade-up">
                
               <img src='imgs/bg.png' alt='Hello'/>
              </div>
            </div>
          </div>




      }
    </>
  )
}

export default Home
