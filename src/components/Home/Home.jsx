import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { Chip, Biceps } from '../../assets/icons'
import { RiseOutlined } from '@ant-design/icons'
import './Home.css'
import { Link } from 'react-router-dom'
import andrei from '../../assets/images/arms-workout.jpg'
import instance from './../../config/httpClient'
import { openErrorNotification } from './../../utils/antd-notifications'
import ProfileAvatar from './../Navbar/ProfileAvatar'

const Home = () => {
  const [popularCoaches, setPopularCoaches] = useState([])

  useEffect(() => {
    async function getPopularCoaches () {
      try {
        const res = await instance.get('users/coaches/popular')
        setPopularCoaches(res.data)
      } catch (e) {
        openErrorNotification('Something Went Wrong')
      }
    }
    getPopularCoaches()
  }, [])

  return (
    <React.Fragment>
      <section className='landing'>
        <div className='landing-text'>
          <h1>
            Find the program that fits your <br />
            <span className='landing-text--keys'>
              GOALS, SCHEDULE and LEVEL!
            </span>
          </h1>
          <p>We are proudly the first Tunisian coaching platform</p>
          <Button type='primary' size='large'>
            Start Training
          </Button>
        </div>
      </section>
      <section className='home-features'>
        <h1>Our Features</h1>
        <div className='home-features-container'>
          <div className='home-feature'>
            <div className='home-feature--header'>
              <Chip />
            </div>
            <h2>AI tailored programs</h2>
            <p>
              No matter your fitness level, our smart app will suggest you the
              best program that suits your needs among 100+ training programs
              built and maintained by more than 20 trusted coach.
            </p>
          </div>
          <div className='home-feature'>
            <div className='home-feature--header'>
              <RiseOutlined
                style={{ fontSize: '100px', color: 'var(--primary)' }}
              />
            </div>
            <h2>Track your progress</h2>
            <p>
              Get detailed informations about your progress, how much did your
              strength, endurance and weight change from the day you started
              using Coach Me.
            </p>
          </div>
          <div className='home-feature'>
            <div className='home-feature--header'>
              <Biceps />
            </div>
            <h2>The biggest fitness Community</h2>
            <p>
              Training alone might get boring, that's why we added a forum
              section in every program so that you can interact with other
              members and coaches.
            </p>
          </div>
        </div>
      </section>
      <section className='home-features'>
        <h1>Popular Coaches</h1>
        <div className='popular-coaches-container'>
          {popularCoaches.map(coach => (
            <div key={coach._id} className='popular-coach-card'>
              <div
                style={{ backgroundImage: `url(${coach.avatar})` }}
                className='popular-coach-card__picture'
              />
              <div className='popular-coach-card__description'>
                <h3>{coach.firstName + " " + coach.lastName}</h3>
                <p>{coach.totalSubscriptions} subscriptions</p>
                <Button type='link'>View Profile</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home
