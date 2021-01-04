import React,{useEffect,useState} from 'react'
import Card from '../UI/Cards/Cards'
import './SideBar.styles.css'
import blogPost from '../../data/blog.json'
import { NavLink } from 'react-router-dom'
/**
* @author
* @function SideBar
**/

const SideBar = (props) => {

  const [posts ,setposts]=useState([]);
  
    useEffect(()=>{
   const posts= blogPost.data;
        setposts(posts)
    },[posts]);

  return(
    <div className="sidebar">
   <Card style={{marginBottom:"20px",padding:'20px',boxSizing:'border-box'}}>
       <div className="cardHeader">
         <span>
           About US
         </span>
         </div>
         <div className="profilePic">
           <img src={require('../../images/MKaleem.jpg').default} alt="fb"/>
         </div>
          <div className="cardBody">
            <p>My name is M.kaleem i am  student . i am also a web desginer & developer</p>
          </div>
   </Card>
   <Card  style={{marginBottom:"20px",padding:'20px',boxSizing:'border-box'}}>
       <div className="cardHeader">
         <span>
           Socail network
         </span>
       </div>
   </Card>
   

   <Card style={{marginBottom:"20px",padding:'20px',boxSizing:'border-box'}}>
       <div className="cardHeader">
         <span>
           Recent posts
         </span>
       </div>




       <div className="recentPosts"> 
       {

         posts.map(post=>{
           return(
            <NavLink to={`/post/${post.slug}`} key={post.id}>
       <div className="recentPost"> 
         <h3>{post.blogTitle}</h3>
           <span>{post.postedOn}</span>
       </div>
       </NavLink>
           );
         })
         
       }
       


       </div>
   </Card>
   </div> 
   )

 }

export default SideBar;