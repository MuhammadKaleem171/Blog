import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import Search from '../../assets/Icon/search.png'
/**
* @author
* @function Navbar
**/
import './Navbar.styles.css'
const Navbar = (props) => {

const [search,setSearch]=useState(false);


  const SubmitSearch=(e )=>{
    e.preventDefault();
    alert("searched")
  }
  const OpenSearch=()=>{
    setSearch(true);
  }

  const searchClass= search ?'searchInput.active':'searchInput';
  console.log(search)
  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Post">Post</NavLink></li>   
            <li><NavLink to ="/ContactUs">Contact Us</NavLink></li>
        </ul>
        <div className="search">
          <form onSubmit={SubmitSearch}>
            <input  type="text"  className={searchClass} placeholder="search"/>
            <img  onClick={OpenSearch} className="searchIcon" alt="search" src={Search }  width="20px" height="20px"/>
            </form>
        </div>
    </div>
   )

 }

export default Navbar