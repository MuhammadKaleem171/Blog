import React from 'react'

import './Cards.styles.css'
/**
* @author
* @function Card
**/

const Card = (props) => {
  return(
    <div className="card" style={props.style}>
        {props.children}
    </div>
   )

 }

export default Card