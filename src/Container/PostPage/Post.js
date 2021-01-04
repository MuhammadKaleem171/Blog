import React from 'react'
import BlogPost from '../../Components/BlogPost/BlogPost'
import SideBar from '../../Components/Sidebar/SideBar'
import './post.styles.css'
/**
* @author
* @function 
**/

const Post  = (props) => {
  console.log(props)
  return(
    <div>
        <section className="container">
             <BlogPost {...props}/>
             <SideBar/>

        </section>
    </div>
   )

 }

export default Post;