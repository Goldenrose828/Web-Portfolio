import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./src/pages/home/home"
import Service from "./src/pages/service/service"
import Contact from "./src/pages/contact/contact"
import About from "./src/pages/about/about"
import Project from "./src/pages/project/project"
import Navbar from "./src/components/Navbar/navbar"

const MainRouter = () =>{
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="pages/home" element={<Home/>}/>
                <Route path="pages/service" element={<Service/>}/>
                <Route path="pages/contact" element={<Contact/>}/>
                <Route path="pages/about" element={<About/>}/>
                <Route path="pages/project" element={<Project/>}/>
            </Routes>     
        </div>
    );
};

export default MainRouter;