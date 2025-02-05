import React from "react";
import { Link } from "react-router-dom";
import './project.css';
import Project1img from '../../components/imgs/project/project1.jpg';
import Upcoming from '../../components/imgs/project/upcoming.png';


const Project = () =>{
    return (
        
        <div className="projects-container">
            <div className="projects-grid">
                {/* Project 1 */}
                <div className="project-card">
                    <img src={Project1img} alt="Project 1" />
                    <h3>EduConnect</h3>
                    <p>A web application designed to connect students with tutors and study resources. The platform allows users to search for tutors based on subjects, schedule virtual sessions, and access a library of learning materials. 
                        Built with React for the front end and Node.js for the back end, it features real-time chat functionality, secure payment integration, and a sleek, user-friendly interface to enhance the learning experience.
                    </p>
                    <button>
                        <a href="http://link-to-project1.com" target="_blank" rel="noopener noreferrer">View Project</a>
                    </button>
                </div>

                {/* Project 2 */}
                <div className="project-card">
                    <img src={Upcoming} alt="Project 2" />
                    <h3>Club hub</h3>
                    <p>A comprehensive software platform designed to unify all the clubs at Centennial College into a single, accessible application. The platform allows students to explore various clubs, join activities, and stay updated on events and announcements.
                         Developed with a user-friendly interface and secure backend, Club Hub simplifies communication, fosters community engagement, and promotes collaboration among students and club organizers.
                    </p>
                    <button>
                        <a href="http://link-to-project5.com" target="_blank" rel="noopener noreferrer">Coming Soon...</a>
                    </button>
                </div>

                {/* Project 3 */}
                <div className="project-card">
                    <img src={Upcoming} alt="Project 3" />
                    <h3>Health Data Analysis Using Excel</h3>
                    <p>A data-driven project focused on analyzing health data from Ontario to uncover trends, generate insights, and identify potential areas for improvement in healthcare services. 
                        Utilizing Excel’s advanced data analysis tools, such as pivot tables, charts, and statistical functions, this project aims to provide actionable insights to enhance decision-making and optimize healthcare delivery in the province.
                    </p>
                    <button>
                        <a href="http://link-to-project3.com" target="_blank" rel="noopener noreferrer">Coming Soon...</a>
                    </button>
                </div>

                {/* Project 4 */}
                <div className="project-card">
                    <img src={Upcoming} alt="Project 4" />
                    <h3>Upcoming project</h3>
                    <p>I’m currently involved in a range of exciting projects centered on developing innovative software solutions and improving user experiences. Stay tuned for updates as I dive deeper into exploring and leveraging cutting-edge technologies!
                    </p>
                    <button>
                        <a href="http://link-to-project4.com" target="_blank" rel="noopener noreferrer">Coming Soon...</a>
                    </button>
                </div>

                {/* Project 5 */}
                <div className="project-card">
                    <img src={Upcoming} alt="Project 5" />
                    <h3>Upcoming project</h3>
                    <p>I’m currently involved in a range of exciting projects centered on developing innovative software solutions and improving user experiences. Stay tuned for updates as I dive deeper into exploring and leveraging cutting-edge technologies!
                    </p>
                    <button>
                        <a href="http://link-to-project5.com" target="_blank" rel="noopener noreferrer">Coming Soon...</a>
                    </button>
                </div>

                {/* Project 6 */}
                <div className="project-card">
                    <img src={Upcoming} alt="Project 6" />
                    <h3>Upcoming project</h3>
                    <p>I’m currently involved in a range of exciting projects centered on developing innovative software solutions and improving user experiences. Stay tuned for updates as I dive deeper into exploring and leveraging cutting-edge technologies!
                    </p>
                    <button>
                        <a href="http://link-to-project6.com" target="_blank" rel="noopener noreferrer">Coming Soon...</a>
                    </button>
                </div>
            </div>

            {/* Services Section */}
            <div className="services-section">
                <h2>Let's head to services</h2>
                <Link to="../pages/Service"><button className="service-button">Go to Services</button></Link>
            </div>
    </div>
    )
};

export default Project;