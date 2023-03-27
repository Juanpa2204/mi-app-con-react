import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Navbar = () => {

    return (
        <header className=" barra p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <img src="https://th.bing.com/th/id/R.0c0d18e1da988112205ae7a38569a5df?rik=BLBQDdyy%2frmfSw&pid=ImgRaw&r=0" className='App-logo'></img>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
                    </ul>
                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <button type="button" className="btn btn-outline-light me-2"><Link to={"/user-form"}>Sign-up
                        </Link></button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
