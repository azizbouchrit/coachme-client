import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import './Navbar.css'
import ProfileAvatar from './ProfileAvatar'

const Navbar = props => {
  const [user, setUser] = useState(false)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) setUser(user)
    console.log(user)
  }, [])

  return (
    <nav className='navbar'>
      <Link to='/home' className='brand'>
        💪 Coach Me
      </Link>
      <ul className='nav-menu'>
        <li className='nav-menu--item'>Programs</li>
        {user ? (
          <ProfileAvatar user={user} />
        ) : (
          <>
            <li className='nav-menu--item'>Become a Coach</li>
            <li className='nav-menu--item'>
              <Link to='/login'>Log In</Link>
            </li>
            <li className='nav-menu--item'>
              <Link to='/signup'>
                <Button type='primary' size='large'>
                  Start Training
                </Button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
