import React from 'react'
import './Header.styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
        </nav>
        <div>
        <nav className="headerMenu">
        <a href="https://www.facebook.com/malikkaleem438/"
 >
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://twitter.com/malikkaleem438" >
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.instagram.com/malikkaleem438/"
  >
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
        </nav>
        </div>
    </header>
   )

 }

export default Header