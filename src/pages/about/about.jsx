import React from "react";
import Layout from "../../components/Navbar/navbar";
import "./about.css";
import profimg from '../../components/imgs/about/deepimg.jpg'
import { Link } from "react-router-dom";


const About = () =>{
    return (
        
        <div className="about-container">
            <div className="about-details">
                <h1 className="about-title">Deepkumar Parejiya</h1>
                <p className="about-description">
                I am Deepkumar Parejiya, a passionate Software Engineering student at Centennial College with hands-on experience 
                in full-stack web development, specializing in React, Node.js, and SQL. I am currently working on JUGAADAI.COM, a 
                platform that helps users discover and select AI tools. My background includes managing projects, database design, 
                and developing user-friendly applications.<br/><br/>

                I am pursuing a degree in Software Engineering from Centennial College, with part-time experience as a receptionist at 
                Unionville Athletic Club and managerial experience at Pramukh Store. I am continually enhancing my skills in 
                web development, backend systems, and AI.<br/><br/>

                My technical skills include JavaScript, React, Node.js, SQL, and AI tool integration. I am also well-versed in backend 
                development and have experience setting up Apache, OpenSSH, and Samba servers.<br/><br/>

                Let's go to my Projects<br/>
                </p>
                <Link to="../pages/Project"><button className="project-button">My Projects</button></Link>
            </div>
            <div className="about-image">
                <img src={profimg} alt="Deepkumar Parejiya" />
            </div>
        </div>
    )
};

export default About;