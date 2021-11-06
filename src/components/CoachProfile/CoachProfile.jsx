import React, { useEffect, useReducer, useState } from 'react'
import { Card, Col, Row } from 'antd'
import profileImg from '../../assets/images/profile.jpeg' // with require
const CoachProfile = () => {
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
                <div class='col-sm-9 text-secondary'>{user.email}</div>
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
      <div className='programms-coach'>
        <h1> your programs</h1>
        <div className='site-card-wrapper'>
          <Row gutter={16}>
            <Col span={8}>
              <Card title=' program 1 ' bordered={false}>
                Welcome to a 7-week journey towards improved fitness and better
                health. Our 7-week fitness program is a research-based and
                time-efficient way to boost your health, and it fits both those
                who hate and those who love exercise.
              </Card>
            </Col>
            <Col span={8}>
              <Card title='program 2' bordered={false}>
                Aerobic activity, also known as cardio or endurance activity, is
                the cornerstone of most fitness training programs. Aerobic
                activity or exercise causes you to breathe faster and more
                deeply, which maximizes the amount of oxygen in your blood. Your
                heart will beat faster, which increases blood flow to your
                muscles and back to your lungs.
              </Card>
            </Col>
            <Col span={8}>
              <Card title='program 3' bordered={false}>
                Muscular fitness is another key component of a fitness training
                program. Strength training can help you increase bone strength
                and muscular fitness, and it can help you manage or lose weight.
                It can also improve your ability to do everyday activities. Aim
                to include strength training of all the major muscle groups into
                your fitness routine at least twice a week.
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default CoachProfile
