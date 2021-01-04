import logo from './logo.svg';
import './App.css';
import Home from './Container/Homepage/Home';
import Header from './Components/HeaderComponent/Header';
import Hero from './Components/HeroComponent/Hero';

import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ContactUS from './Container/ContactUspage/ContactUs';
import Post from './Container/PostPage/Post';
import Footer from './Components/Footer/Footer';
import AddPost from './Container/AddPost/AddPosts';
import MainPost from './Container/PostPage/MainPost';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Hero/>

<Route  exact path="/" component={Home}/>
<Route path="/ContactUs" component={ContactUS}/>
<Route path="/post" component={MainPost}/>
<Route path="/Post/:slug" component={Post}/>
<Route path="/addpost" component={AddPost}/>
    
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
