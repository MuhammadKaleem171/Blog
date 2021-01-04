import React from 'react'
import Logo from '../Logo/Logo'
import Navbar from '../NavbarComponent/Navbar'
import Card from '../UI/Cards/Cards'
import './Hero.styles.css'
/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
    <div>
        <Card >
             <div style={{padding: "50px 0 0 0;" }}> 
             <Logo/>
             </div>
             <Navbar/>
            </Card>
    </div>
   )

 }

export default Hero;