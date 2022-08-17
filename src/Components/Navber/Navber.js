import React from 'react';
import './Navber.css'
import img from '../../shopping-online.jpg'

const Navber = ({cart}) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-2 d-flex align-items-center">
                    <img className='w-50 m-1 nav-img' src={img} alt=''></img>
                </div>
                <div className="col-md-10 nav-container">
                    <li className='me-1 p-2'>Home</li>
                    <li className='me-1 p-2'>Contact</li>
                    <li className='me-1 p-2'>Profile</li>
                    <li className='me-1 p-2'>Cart<sup>{cart}</sup></li>
                    <li className='me-1 p-2'>Log in</li>
                </div>
            </div>
            
        </div>
    );
};

export default Navber;