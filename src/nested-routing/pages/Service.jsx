import React from 'react'
import './Service.css';
import { Link, Outlet } from 'react-router-dom';

const Service = () => {
    return (
        <div className='services-container'>
            <h2 className='service-title'>Our Services</h2>
            <p className='services-subtitle'>Choose one of our service below</p>


            <div className='services-links'>
                <Link to='/web-development'
                    className='service-link web'>Web Development</Link>

                <Link to='/app-development'
                    className='sevice-link app'>Design</Link>

                    <Link to='/design'
                     className='service-link design'> </Link>
            </div>

            {/* nested route content */}
            <Outlet/>
        </div>
    )
}

export default Service