import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import './service.css';
import SRS from '../../components/imgs/service/srs.svg';
import Java from '../../components/imgs/service/java.svg';
import Csharpsvg from '../../components/imgs/service/csharp.svg';
import Mern from '../../components/imgs/service/react.svg';
import Database from '../../components/imgs/service/database.svg';
import Linux from '../../components/imgs/service/linux.svg';


const Service = () =>{
    return (
        
        <>
            <div className="services-container">
                <div className="services-grid">
                    {/* Service 1: Full Stack MERN Developer */}
                    <div className="service-card">
                        <img src={Mern} alt="MERN Developer" className="service-icon" />
                        <h3>Full Stack MERN Developer</h3>
                        <p>Proficient in building efficient web applications using MongoDB, Express, React, and Node.js. Experienced in both frontend and backend development.</p>
                    </div>

                    {/* Service 2: Database Administration */}
                    <div className="service-card">
                        <img src={Database} alt="Database Administration" className="service-icon" />
                        <h3>Database Administration</h3>
                        <p>Skilled in managing SQL and PL/SQL databases, optimizing queries, and ensuring data security and integrity across various platforms.</p>
                    </div>

                    {/* Service 3: C# Developer */}
                    <div className="service-card">
                        <img src={Csharpsvg} alt="C# Developer" className="service-icon" />
                        <h3>C# Developer</h3>
                        <p>Experienced in developing robust applications in C# with a focus on efficient code structure and user-friendly interfaces.</p>
                    </div>

                    {/* Service 4: Java Developer */}
                    <div className="service-card">
                        <img src={Java} alt="Java Developer" className="service-icon" />
                        <h3>Java Developer</h3>
                        <p>Knowledgeable in Java programming with expertise in building scalable applications, ensuring performance and reliability.</p>
                    </div>

                    {/* Service 5: System Administrator */}
                    <div className="service-card">
                        <img src={Linux} alt="System Administrator" className="service-icon" />
                        <h3>System Administrator</h3>
                        <p>Proficient in Linux system administration, including server configuration, network management, and maintaining system security.</p>
                    </div>

                    {/* Service 6: Software Business Analyst */}
                    <div className="service-card">
                        <img src={SRS} alt="Software Business Analyst" className="service-icon" />
                        <h3>Software Business Analyst</h3>
                        <p>Expertise in system design, SRS documentation, and project management, ensuring successful implementation of business solutions.</p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="contact-section">
                    <h2>Please contact me for service</h2>
                    <Link to="../pages/Contact"><button className="contact-button">Go to Contact Page</button></Link>
                </div>
            </div>
        </>
    )
};

export default Service;