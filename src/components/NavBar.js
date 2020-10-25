import React from 'react'
import {NavLink} from 'react-router-dom'


export const Navbar = () => ( //обычная функция возращающая JSX 
    <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
        <div className='navbar-brand'>
            DNIPRO
        </div>
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <NavLink exact to="/" className='nav-link'>Main</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to="/about" className='nav-link'>About</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to="/profile/:name" className='nav-link'>Profile</NavLink>
            </li>
        </ul>
    </nav>
)