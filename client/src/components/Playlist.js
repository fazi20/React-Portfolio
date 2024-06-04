import React, { useEffect, useState } from 'react'
import "./Playlist.css"

const Playlist = () => {
  const [spin, setSpin] = useState(true)

  useEffect(() => {

    setTimeout(() => {

      setSpin(false)

    }, 1500)
  }, [])
  return (
    <>
      {
        spin ? <div className='d-flex justify-content-center align-items-center' style={{ height: "85vh" }}> <div className="spinner-grow text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> </div> :
          <div className='container'>
            <div className=' row playlist-inner-div'>
              <div className=' col-lg-4 mb-5 box'>
                <div className='box-content'>
                  <div className='box-img'>
                    <img src='imgs/Screenshot 2024-05-28 153035.png' alt='img' />
                  </div>
                  <div className='title'>
                    <h2>Portfolio Website</h2>
                  </div>
                </div>
                <a href='https://fazi20.github.io/Webpage-using-Bootstrap/'><button id='btn'>Explore</button></a>
              </div>
              <div className=' col-lg-4 mb-5 box'>
                <div className='box-content'>
                  <div className='box-img'>
                    <img src='imgs/Screenshot 2024-05-28 153111.png' alt='img' />
                  </div>
                  <div className='title'>
                    <h2>Portfolio Website</h2>
                  </div>
                </div>
                <a href='https://fazi20.github.io/Website-using-HTML-CSS-Javascript/'><button id='btn'>Explore</button></a>
              </div>
              <div className='col-lg-4 mb-5 box'>
                <div className='box-content'>
                  <div className='box-img'>
                    <img src='imgs/Screenshot 2024-05-28 153321.png' alt='img' />
                  </div>
                  <div className='title'>
                    <h2>Portfolio Website</h2>
                  </div>
                </div>
                <button id='btn'>Explore</button>
              </div>
              <div className='col-lg-4 mb-5 box'>
                <div className='box-content'>
                  <div className='box-img'>
                    <img src='imgs/Screenshot 2024-05-28 153321.png' alt='img' />
                  </div>
                  <div className='title'>
                    <h2>Portfolio Website</h2>
                  </div>
                </div>
                <button id='btn'>Explore</button>
              </div>
             
            </div>

          </div>

      }
    </>
  )
}

export default Playlist
