import React from "react";
import Layout from "../../components/Navbar/navbar";
import "./about.css";
import profimg from '../../components/imgs/about/deepimg.jpg'
import { Link } from "react-router-dom";


const About = () =>{
    return (
        
        <div className="about-container">
            <div className="about-details">
                <h1 className="about-title">Rose</h1>
                <p className="about-description">
                I am Rosemary Elochukwu Oliora, a dedicated Software Engineering student at Centennial College with hands-on experience in full-stack web development, specializing in React, Node.js, and SQL. 
                I am currently working on a task management application, a platform that helps people with organizing their daily schedules and boosting productivity.
                My background includes debugging and optimizing code, collaborating in team-based development environments, and implementing secure and scalable software solutions. <br/><br/>

                I am pursuing a degree in Software Engineering from Centennial College, with part-time experience as a Junior Developer at XYZ Company and managerial experience as a Team Lead at ABC Organization. 
                I am continually enhancing my skills in web development, backend systems, and artificial intelligence.<br/><br/>

                My technical skills include JavaScript, React, Node.js, SQL, and integrating AI tools. 
                I also have expertise in backend development and hands-on experience configuring Apache, OpenSSH, and Samba servers.<br/><br/>

                Let's head to Projects<br/>
                </p>
                <Link to="../pages/Project"><button className="project-button">My Projects</button></Link>
            </div>
            <div className="about-image">
                <img src={profimg} alt="Rose" />
            </div>
        </div>
    )
};

export default About;