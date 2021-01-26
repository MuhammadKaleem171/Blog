import React from 'react'
import image from '../../images/kaleem1.jpeg'
/**
* @author
* @function Logo
**/
import './Logo.styles.css'
const Logo = (props) => {
  return(
    <div className="logo">
        <img src={image} width='100%'/>
         </div>
   )

 }

export default Logo