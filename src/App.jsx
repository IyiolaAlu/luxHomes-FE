import React from 'react'
import { Route, Routes } from "react-router-dom";
import Signup from './Pages/Signup/Signup'
import Houses from './Pages/Houses/Houses';
import Login from './Pages/Login/Login';
import AgentsDashBoard from './Pages/Agent/AgentsDashBoard';
import ViewHouse from './Pages/ViewHouse/ViewHouse';
import Navbar from './Components/Navbar';
import Home from './Pages/Homepage/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Header from './Components/Header';
import TermsOfService from './Pages/Terms/TermsOfService';
import PrivacyPolicy from './Pages/Privacy/PrivacyPolicy';


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/houses' element={<Houses/>}/>
      <Route path='/house/:id' element={<ViewHouse/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/terms' element={<TermsOfService/>}/>
      <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
      <Route path='/head' element={<Header/>}/>
      {/* Agent/Admin Guard agentAdminGuard*/}
      <Route >
<Route path='/agent' element={<AgentsDashBoard/>}/>
      </Route>
      
    </Routes>


    </>
  )
}

export default App