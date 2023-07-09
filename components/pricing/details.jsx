import React from 'react'
import "./details.css"
import Heading from "../common/heading/Heading"
import { price } from "../../dummydata"

const details = () => {
  return (
    <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <br/>
            <img src='./images/teachers/t4.webp' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='LEARN ANYTHING' title='Tutor Details' />
            <div className='items'>
              <h2>Ayuesh Roy</h2><br/>
              <h3>Looking for students eager to learn and explore the world of Physics.  </h3><br/>
              <ul>
                <li>Number of Students : 15</li><br/>
                <li>Teaching Experience : 1 year 9 months </li><br/>
                <li>Reviews form Student : 3.8/5</li><br/>
                <li>Monthly Remunerations : Rs.800</li><br/>
                <li>Expertise : Expert in Physics with gold medal in M.Sc  </li><br/>
                <li>Ranking in Leaderboard : 3</li><br/>
              </ul>
              <button> Contact with me </button>
              <button> Chat with me </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default details