import React from "react";
import { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar/navbar";
import "./home.css"
import profimg from '../../components/imgs/home/homebg1.jpg';
import { Link } from "react-router-dom";
import Instagram from '../../components/imgs/home/instagram.svg';
import Github from '../../components/imgs/home/github.svg';
import Email from '../../components/imgs/home/email.svg';

const Home = () =>{

    const [typedText, setTypedText] = useState('');
    const fullText = "I am Rosemary Elochukwu Oliora.";
  
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) clearInterval(interval);
        }, 150); 
        return () => clearInterval(interval);
    }, [fullText]);

    return (    
            <div className="home-container">
                <div className="text-section">
                    <h2 className="greeting">Hello, Welcome</h2>
                    <h1 className="title">{typedText}</h1>
                    <p className="description">
                    I’m a passionate Health Informatics Technology student with a strong drive for developing innovative healthcare solutions and exploring emerging technologies in the medical field. My journey in health tech has been both fulfilling and inspiring, and I’m eager to connect and collaborate with you.
                    </p>
                    <div className="social-icons">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt="Instagram" />
                        </a> 
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <img src={Github} alt="GitHub" />
                        </a>
                        <a href="mailto:Oliorarosemary@gmail.com">
                            <img src={Email} alt="Email" />
                        </a>
                    </div>   

                    <Link to="../pages/about"><button className="about-button">About Me</button></Link>
                </div>
                
                {/*<div className="image-section">
                    <img src={profimg} alt="Rosemary" className="profile-image" />
                </div>*/}
            </div>
        )
};



export default Home; 