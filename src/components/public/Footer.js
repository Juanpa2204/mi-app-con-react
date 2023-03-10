import React, { useState } from 'react'

export const Footer = () => {

    const [clicks, setClicks] = useState(0);
    const year = new Date().getFullYear();
    const companyName= "Egg Education, Inc";
    const handleClick = () => {
        setClicks(clicks+1);
    }

    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">&copy; {year}, {companyName} Clicks={clicks}</p>
                <span onClick={handleClick}>
                    <img src="https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/1024/22214-dog-face-icon.png" className='App-logo'></img>
                </span>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                </ul>
            </footer>
        </div>
    )
}

