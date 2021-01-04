import React,{useEffect,useState} from 'react'
import BlogPost from '../../Components/BlogPost/BlogPost';
import Card from '../../Components/UI/Cards/Cards';
import firebase from '../../Utilis/Firebase'
import './post.styles.css'
/**
* @author
* @function MainPost
**/

const MainPost = (props) => {
    
  const [post ,setposts]=useState([]);
  
  useEffect(()=>{
    const toblog=firebase.database().ref('blogPost');
    toblog.on("value",(snapshot)=>{
        const blogdata=snapshot.val();
        const blogdatalist=[]
        for(let id in blogdata){
        blogdatalist.push({id,...blogdata[id]});
    }
    console.log(blogdatalist)
    setposts(blogdatalist)
    console.log(post)
    }); 
  },[]);
  
  const fetchdata=()=>{
    const toblog=firebase.database().ref('blogPost');
    toblog.limitToFirst(1).on("value",(snapshot)=>{
        const blogdata=snapshot.val();
        console.log(blogdata)
  })
}

const fetchLast=()=>{
  const toblog=firebase.database().ref('blogPost');
  toblog.limitToLast(2).on("value",(snapshot)=>{
      const blogdata=snapshot.val();
      console.log(blogdata)
})
}
const fetchStartAt=()=>{
  const toblog=firebase.database().ref('blogPost');
  toblog.orderByChild("blogCategory").startAt("Featured").on("value",(snapshot)=>{
      const blogdata=snapshot.val();
      console.log(blogdata)
})
}

  

  
  if(post.length<1)
  return null
  
  return(
  <div>
    {
  post.map(p=>{
  return(
      <div className="blogpostContainer" key={p.blogTitle}>
    <Card>
       <div className="blogHeader">
  <span className="blogCategory">{p.blogCategory}</span>
           <h1 className="postTitle">
               {p.blogTitle}
           </h1>
  <span> posted {p.postedOn.text} by{p.author}</span>
       </div>
       <div className="postImage">
       <img src={`data:image/jpeg;base64,${p.blogImage}`} />
       </div>

       <div className="postContent">
  <h3>{p.blogTitle}</h3>
           <p>
              {p.blogText}
           </p>
       </div>
    </Card>
    </div>
)
})
   }   <button onClick={fetchdata}> Fetch first</button>
    <button onClick={fetchLast}> Fetch last one </button>
    <button onClick={fetchStartAt}> Start at</button>



  </div>
   )

 }

export default MainPost