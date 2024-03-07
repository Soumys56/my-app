import React from 'react'
import "./Card.css"
const Card = ({item}) => {
   
  return (
    <div className='Card'>
           <div className='card_image'>
             <img src={item.image}/>
              
           </div>
           <p className='card_name'>
                {item.name}
           </p>
    </div>
  )
}

export default Card