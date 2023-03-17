import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import RickAndMortyService from '../../services/RickAndMorty.Service';

const Navbar = () => {

    const [mascota, setMascota] = useState([]);
    const { id } = useParams();

    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <img src="https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/1024/22214-dog-face-icon.png" className='App-logo'></img>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
                    </ul>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
                    </form>
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
