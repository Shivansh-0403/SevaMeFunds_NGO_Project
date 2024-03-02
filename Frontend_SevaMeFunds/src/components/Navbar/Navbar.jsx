// import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../images/logo.png'

function Navbar() {
    return (
        <div className='flex justify-between bg-white drop-shadow-2xl fixed w-screen p-2'>
            <div className='ml-48'>
                <Link to='/'>
                    <img src={Logo} alt="Logo SevaMeFunds" width='125' height='125' />
                </Link>
            </div>

            <div className='flex gap-12 m-auto p-2'>
                <div className='hover:scale-125 hover:transition hover:delay-150 hover:duration-300 text-lg'>
                    <NavLink to='/'>Home</NavLink>
                </div>
                <div className='hover:scale-125 hover:transition hover:delay-150 hover:duration-300 text-lg'>
                    <NavLink to='/about'>About</NavLink>
                </div>
                <div className='hover:scale-125 hover:transition hover:delay-150 hover:duration-300 text-lg'>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
                <div className='hover:scale-125 hover:transition hover:delay-150 hover:duration-300 text-lg'>
                    <NavLink to='/volunteer'>Volunteer</NavLink>
                </div>
            </div>
            <div className='my-auto mr-56 hover:scale-125 hover:transition hover:delay-150 hover:duration-300 text-lg py-3 px-5 rounded-lg hover:bg-blue-700 bg-blue-500 text-white'>
                <Link to='/donate'>Donate</Link>
            </div>
        </div>
    )
}

export default Navbar