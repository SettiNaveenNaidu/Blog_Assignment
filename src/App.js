import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


import SignUp from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Add from './pages/Adding'
import Eachpost from "./pages/EachPost";
import EditPost from "./pages/EditPost";
import Userposts from "./pages/Userposts";
import Profilepage from "./pages/Profile"; 
import Story from "./pages/ourstory";
import Membership from "./pages/Membership";

const App=()=>{

  /*const Authentication = !!localStorage.getItem(/*'authToken'*/
  const Authentication=false;
  return(
  <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path='/eachpost' element={<Eachpost/>}/>
      <Route path="/addpost" element={<Add/>} />
      <Route path='/ourstory' element={<Story></Story>}/>
      <Route path="/membership" element={<Membership/>} />
      <Route path="/profile/:userId" component={<Profilepage></Profilepage>} />
      <Route path="/editpost" element={<EditPost/>}/>
      {Authentication && (
          <>
            <Route exact path="/" element={<Home/>} />
            {/*<Route exact path="/posts/:postId" element={<Eachpost/>} />*/}
            <Route path="/editpost" element={<EditPost/>}/>
            <Route path='/userposts' element={<Userposts/>}/>
            <Route path='/profile/' element={<Profilepage/>}/>
          </>
        )}    
    </Routes>
  </Router>)
}

export default App;
