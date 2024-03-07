import React from 'react'
import "./CardThree.css"
const Cardthree = ({item}) => {
  return (
    <div className='cardThree_box'>
        <div className='cardThree_container'>
            <img src={item.image}/>
        </div>
        <div className='card_des_rupess'>
         <p>{item.des}</p>
         <b>{item.rupess}</b>
        </div>
        
        
    </div>
  )
}

export default Cardthree