import React from "react"
import { price } from "../../dummydata"
import { Link } from "react-router-dom";

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className='items shadow'>
          <img className="it" src={val.cover} alt='' />
          <br/><br/>
          <h2>{val.name}</h2>
          <h3>{val.subject}</h3>
          <p>
            {val.location}<br/>
            {val.price}<br/>
            {val.desc}
          </p>
          <Link to='/details' className="link">
            <button className='outline-btn'>
                Get Details
              </button>
            </Link>
        </div>
      ))}
    </>
  )
}

export default PriceCard
