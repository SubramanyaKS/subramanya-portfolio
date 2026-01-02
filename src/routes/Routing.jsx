import React from 'react';
import Navbar from "../components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import routingdetails  from './routingdetails';
import ChatBot from '../components/ChatBot';

const Routing = () => {
  return (
    <Router>
       <Navbar />
       <Routes>
        {routingdetails.map((data)=>(
        <Route key={data.id} path={data.path} Component={data.element} />
        ))}
       </Routes>
       <ChatBot/>
       <Footer />
     </Router>
  )
}

export default Routing