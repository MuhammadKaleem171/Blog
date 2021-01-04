import React from 'react'
import Card from '../../../Components/UI/Cards/Cards.js'
import './RecentPost.styles.css'
import blogdata from '../../../data/blog.json'
/**
* @author
* @function RecentPost
**/

const RecentPost = (props) => {
const data=blogdata.data;
console.log(data)

  return(
    
    <div style={{width:"70%"}}>
    <Card style={{marginBottom:"20px"}}>
        <div className="postImageWrapper">
        <img src={require('../../../images/'+data[2].blogImage).default} alt="main" ></img>
        </div>
        <div style={{textAlign:'center '}}>
            <span>Feature</span>
            <h2>{data[2].blogTitle} </h2>
  <span>Posted on {data[2].postedOn} by{data[2].author}</span>
                <p>{data[2].blogText}</p>
            <button> Read More</button>
        </div>
        
     </Card>
     <Card style={{marginBottom:"20px"}}>
        <div className="postImageWrapper">
        <img src={require('../../../images/'+data[1].blogImage).default} alt="main" ></img>
        </div>
        <div style={{textAlign:'center '}}>
            <span>Feature</span>
            <h2>{data[1].blogTitle} </h2>
  <span>Posted on {data[1].postedOn} by{data[1].author}</span>
                <p>{data[1].blogText}</p>
            <button> Read More</button>
        </div>
        
     </Card>
 </div>
   )

 }

export default RecentPost;