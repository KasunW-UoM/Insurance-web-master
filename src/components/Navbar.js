import React, { useState } from 'react';
import { Link } from 'react-router-dom';


//import css style
import './Navbar.css';


function Navbar() {

    //function

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return (
        <>
            <new className='navbar'>
                <div className='navbar-container'>

                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        LOGO
                    </Link>
                    
                </div>
            </new>
            
        </>
    )
}

export default Navbar
