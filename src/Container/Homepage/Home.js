import React from 'react'
import Header from '../../Components/HeaderComponent/Header'
import SideBar from '../../Components/Sidebar/SideBar'
import Card from '../../Components/UI/Cards/Cards'

import './Home-styles.css'
import RecentPost from './RecentPost/RecentPost'
const Home=props=>{

const gallaryHeight=450;
const gallaryStyle={
    height:gallaryHeight+'px',
    overflow:'hidden'
}

const  sideImageHeight=gallaryHeight/3;
return(
    <div>
     <Card>
         <div className="gallaryPost" style={gallaryStyle}>
             <section style={{width:'70%'}}>
                 <div>
                     <a href="post/fitness-mantra-to-live-fit-life">
                     <img src={require('../../images/index1.jpg').default}  style={{maxWidth:'100%'}}></img>
                     </a>
                 </div>
             </section>

             <section className={"sideImageWrapper"} style={{width:'30%'}}>
                 <div style={{height:`${sideImageHeight}px`}} >
                     
                     <img src="http://justliftfitness.com/wp-content/uploads/2020/01/Lazar-Angelov.jpg" ></img>
                 </div>
                 <div style={{height:`${sideImageHeight}px`}} >
                     <img  src={require('../../images/tired-head.jpg').default} alt="tired head"></img>
                 </div>
                 <div style={{height:`${sideImageHeight}px`}} >
                 <img src={require('../../images/index1.jpg').default} ></img>
                 </div>

             </section>
         </div>
     </Card>
     <section className="HomeContainer">
     <RecentPost/>
        <SideBar/>
     </section>

     



    </div>
)

}
export default Home;