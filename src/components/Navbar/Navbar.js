import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../../utils/utility'
import Search from './Search'

const Navbar = () => {
  return (
    <div className='w-screen flex justify-between px-4 bg-white items-center sticky top-1'>
        <Link to={'/'}>
            <img src={logo} alt='logo' className='h-14' />
        </Link>
        <Search />

    </div>
  )
}

export default Navbar