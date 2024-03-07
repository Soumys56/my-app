import React from 'react'
import "./Cardfour.css"

const Cardfour = ({sellproduct}) => {
  return (
    <div className='Cardfour_image'>
      <img src={sellproduct.image}/>

    </div>
  )
}

export default Cardfour