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
     <Card style={{width:'90vw'}}>
         <div className="gallaryPost" style={gallaryStyle}>
             <section style={{width:'70vw'}}>
                 <div style={{height:'450px'}}>
                     <a href="post/fitness-mantra-to-live-fit-life">
                     <img src={require('../../images/index1.jpg').default}  style={{maxWidth:'100%',height:'100%'}}></img>
                     </a>
                 </div>
             </section>

             <section className={"sideImageWrapper"} style={{width:'30%',overflow:'hidden'}}>
                 <div style={{height:'33.3%'}} >
                     
                     <img src="http://justliftfitness.com/wp-content/uploads/2020/01/Lazar-Angelov.jpg" style={{width:'100%',height:'100%'}}></img>
                 </div>
                 <div style={{height:'33.3%'}} >
                     <img  src={require('../../images/tired-head.jpg').default } style={{width:'100%',height:'100%'}} alt="tired head"></img>
                 </div>
                 <div style={{height:'33.3%'}} >
                 <img src={require('../../images/index1.jpg').default}style={{width:'100%',height:'100%'}} ></img>
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