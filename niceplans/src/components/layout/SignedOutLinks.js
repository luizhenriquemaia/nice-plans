import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedOutLinks = () => {
    return (
        <ul className='links-navbar'>
            <li><NavLink to='/'>SignUp</NavLink></li>
            <li><NavLink to='/'>Login</NavLink></li>
            <li><NavLink to='/'>About</NavLink></li>
        </ul>
    )
}


export default SignedOutLinks