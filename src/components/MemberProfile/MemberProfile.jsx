import React from 'react'
import './MemberProfile.css'
import { useEffect, useState } from 'react'
import profileImg from '../../assets/images/mekki.jpg' // with require

const MemberProfile = () => {
  const [user, setUser] = useState(false)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) setUser(user)
    console.log(user)
  }, [])

  return (
    <div className='member-profile-page'>
      <div className='d-flex flex-column align-items-center text-center'>
        <img src={profileImg} style={{width: '200px'}} className='img-responsive' alt='' />
      </div>
      <h1>{user.username}</h1>
      <div className='col-md-8'>
        <div className='card mb-3'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-sm-3'>
                <h6 className='mb-0'>First Name</h6>
                <div className='col-sm-9 text-secondary'>{user.firstName}</div>
              </div>
              <hr></hr>
            </div>
            <div className='row'>
              <div className='col-sm-3'>
                <h6 className='mb-0'>last Name</h6>
                <div class='col-sm-9 text-secondary'>{user.lastName}</div>
              </div>
              <hr></hr>
            </div>
            <div className='row'>
              <div className='col-sm-3'>
                <h6 className='mb-0'>Email</h6>
                <div className='col-sm-9 text-secondary'>{user.email}</div>
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberProfile
