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
                        Weerasekara Insurance
                    </Link>

                    <div class='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fa fa-times' :  'fa fa-bars'}/>
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/user' className='nav-links' onClick={closeMobileMenu}>
                                Users
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </new>
            
        </>
    )
}

export default Navbar
