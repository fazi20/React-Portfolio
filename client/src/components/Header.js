import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import { NavLink } from 'react-router-dom';


const Header = () => {
    const styling = {

        // textDecoration: "none",
        color: "white"
    }
    

    return (
        <>
            {/* <Navbar bg="dark" data-bs-theme="dark" >
                <Container>
                    <div>
                        <h1>
                            <NavLink to="/" style={{ textDecoration: "none", color: "#ffff" }} >Faizan</NavLink>
                        </h1>
                    </div>

                    <Nav className="" >
                        <div className='mt-2 links' >
                            <NavLink to="/" style={styling}>Home</NavLink>
                            <NavLink to="/about" style={styling}>About</NavLink>
                            <NavLink to="/projects" style={styling}>Projects</NavLink>
                            <NavLink to="/contact" style={styling}>Contact</NavLink>
                        </div>
                        <div>
                            <a href='My CV 2.pdf' target='blank'><Button variant="light">Resume</Button></a>
                        </div>
                    </Nav>
                </Container>
            </Navbar> */}
            <nav class=" navbar bg-dark border-bottom border-body navbar-expand-lg " data-bs-theme="dark">
                <div class="container">
                    <h1><NavLink className="nav-link" to="/" style={styling}>Faizan</NavLink></h1>
                    <button class="navbar-toggler toggle-buton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/"  style={styling}>Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/about"  style={styling}>About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/projects"  style={styling}>Projects</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/contact"  style={styling}>Contact</NavLink>
                            </li>
                        </ul>
                        <div className='nav-button'>
                            <a href='My CV 2.pdf' ><button type="button">Resume</button></a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
