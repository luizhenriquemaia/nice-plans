import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedInLinks = () => {
    return (
        <ul className='links-navbar'>
            <li><NavLink to='/createplan'>New Plan</NavLink></li>
            <li><NavLink to='/'>Calendar</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn-user'>LH</NavLink></li>
       </ul>
    )
}


export default SignedInLinks