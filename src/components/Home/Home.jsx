import { Button } from 'antd'
import React from 'react'
import './Home.css'

const Home = () => {
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
          <Button type="primary" size="large">Start Training</Button>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home
