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
                My name is Rosemary Elochukwu Oliora, and I am a passionate Health Informatics Technology student at Centennial College with practical experience in full-stack development, focusing on React, Node.js, and SQL.
                I am currently working on openEMR a software that is used by Healthcare providers worldwide for managing patient records, Scheduling,  billing  and clinical decision support.<br/><br/>

                 I am pursuing a degree in Health Informatics Technology at Centennial College, with part-time experience as a Junior Developer at XYZ Company and leadership experience as a Team Lead at ABC Organization. 
                 I am continuously advancing my expertise in healthcare-focused software development, backend systems, and the integration of artificial intelligence in health informatics.<br/><br/>

                 My technical skills include JavaScript, React, Node.js, SQL, and implementing AI-driven solutions.
                 I also have experience in backend development and practical knowledge of setting up healthcare-related systems using Apache, OpenSSH, and Samba servers<br/><br/>

                Let's head to Projects<br/>
                </p>
                <Link to="https://drive.google.com/file/d/1AaJQyDW-3nDLAsIKR0bt1msg9N53ZSj-/view?usp=drive_link"><button className="Resume">My Projects</button></Link>
            </div>
            <div className="about-image">
                <img src={profimg} alt="Rose" />
            </div>
        </div>
    )
};

export default About;