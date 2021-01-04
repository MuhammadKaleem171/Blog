import React,{useState,useEffect} from 'react'
import Card from '../UI/Cards/Cards'
import './Blogpost.styles.css'
import image from '../../images/tired-head.jpg'
import blogPost from '../../data/blog.json'

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

    const [post ,setpost]=useState({
        id: 1,
            blogCategory:"",
            blogTitle : "",
            slug: "",
            postedOn: "",
            author: "",
            blogImage: "",
            blogText: "",
    });
    const[slug,setslug]=useState("");
  
    useEffect(()=>{
        const slug=props.match.params.slug;

   const post= blogPost.data.find(post=>post.slug==slug)
        setpost(post)
        setslug(slug)
    },[post,props.match.params.slug]);
  
if(post.blogImage=="") return null;
  return(
      <div className="blogpostContainer">
    <Card>
       <div className="blogHeader">
  <span className="blogCategory">{post.blogCategory}</span>
           <h1 className="postTitle">
               {post.blogTitle}
           </h1>
  <span> posted {post.postedOn} by{post.author}</span>
       </div>
       <div className="postImage">
           <img src={require('../../images/'+post.blogImage).default} alt="blogpic"/>
       </div>

       <div className="postContent">
  <h3>{post.blogTitle}</h3>
           <p>
              {post.blogText}
           </p>
       </div>
    </Card>
 
    </div>
   )

 }

export default BlogPost