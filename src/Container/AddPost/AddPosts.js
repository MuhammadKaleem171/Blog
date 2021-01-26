import React, {useState}from 'react'
import Card from '../../Components/UI/Cards/Cards';
import './AddPost.styles.css'
import firebase from '../../Utilis/Firebase'
/**
* @author
* @function AddPost
**/

const AddPost = (props) => {

const [blogCategory, setblogCategory] = useState("");
const [blogTitle, setblogTitle] = useState("");
const [slug, setslug] = useState("");
const [postedOn, setpostedOn] = useState({
  text:new Date().toLocaleString()
});
const [author, setauthor] = useState("");
const [blogImage, setblogImage] = useState("");
const [blogText, setblogText] = useState("");

const Change=(e)=>{
  console.log("file to upload:",e.target.files[0])
  let file =e.target.files[0]
  if(file){
      const reader=new FileReader();
      reader.onload=_handleReaderLoaded.bind(this)
      reader.readAsBinaryString(file)
  }
}
const  _handleReaderLoaded=(readerEvt)=>{
  let binaryString=readerEvt.target.result
  setblogImage(btoa(binaryString))
}
const submitHandler=(e)=>{
  e.preventDefault()
  console.log(blogCategory, ' ', blogImage,' ', postedOn)
  const toblog=firebase.database().ref('blogPost');
toblog.push({blogCategory:blogCategory,blogTitle:blogTitle,postedOn:postedOn,author:author,
  slug:slug,blogImage:blogImage,blogText:blogText});
}
  return(
    <div className="formContainer">
      <Card style={{padding:'10px 20%'}}>
      <form  onSubmit={submitHandler}>
 <input type="file"
    name="image"
    id="file"
    accept=".jpeg, .png,.jpg"
    onChange={e=>Change(e)} />
  <br/>
    <input
        value={blogCategory}
        onChange={e => setblogCategory(e.target.value)}
        placeholder="blog category"
        type="text"
        name="blogCategory"
        required
        />
        <br/>
        <input
        value={blogTitle}
        onChange={e => setblogTitle(e.target.value)}
        placeholder="blog Title"
        type="text"
        name="blogTitle"
        required
        />
        <br/>

         <input
        value={slug}
        onChange={e => setslug(e.target.value)}
        placeholder="Slug"
        type="text"
        name="slug"
        required
        />
        <br/>
        <input
        value={author}
        onChange={e => setauthor(e.target.value)}
        placeholder="author"
        type="text"
        name="author"
        required
        />
        <br/>


        <input
        value={blogText}
        onChange={e => setblogText(e.target.value)}
        placeholder="blogText"
        type="text"
        name="blogText"
        required
        /><br/>

        <button  className="Button" type="submit" value="submit">Submit</button>


</form>
</Card>
    </div>
   )

 }

export default AddPost;