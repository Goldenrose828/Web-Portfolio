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
                    <h3>QuickOrder Pizza</h3>
                    <p>A Windows Form application for streamlined pizza ordering, allowing users to customize their pizza with various 
                        toppings, sizes, and crusts. The app provides real-time order summaries, calculates costs, and offers a user-friendly 
                        interface to manage pizza orders efficiently.
                    </p>
                    <button>
                        <a href="http://link-to-project1.com" target="_blank" rel="noopener noreferrer">View Project</a>
                    </button>
                </div>

                {/* Project 2 */}
                <div className="project-card">
                    <img src={Upcoming} alt="Project 2" />
                    <h3>Upcoming project</h3>
                    <p>I am currently working on several exciting new projects that focus on innovative software solutions and 
                        enhancing user experiences. Stay tuned for more updates as I continue to explore and implement cutting-edge 
                        technologies.
                    </p>
                    <button>
                        <a href="http://link-to-project5.com" target="_blank" rel="noopener noreferrer">Coming Soon...</a>
                    </button>
                </div>

                {/* Project 3 */}
                <div className="project-card">
                    <img src={Upcoming} alt="Project 3" />
                    <h3>Upcoming project</h3>
                    <p>I am currently working on several exciting new projects that focus on innovative software solutions and 
                        enhancing user experiences. Stay tuned for more updates as I continue to explore and implement cutting-edge 
                        technologies.
                    </p>
                    <button>
                        <a href="http://link-to-project3.com" target="_blank" rel="noopener noreferrer">Coming Soon...</a>
                    </button>
                </div>

                {/* Project 4 */}
                <div className="project-card">
                    <img src={Upcoming} alt="Project 4" />
                    <h3>Upcoming project</h3>
                    <p>I am currently working on several exciting new projects that focus on innovative software solutions and 
                        enhancing user experiences. Stay tuned for more updates as I continue to explore and implement cutting-edge 
                        technologies.
                    </p>
                    <button>
                        <a href="http://link-to-project4.com" target="_blank" rel="noopener noreferrer">Coming Soon...</a>
                    </button>
                </div>

                {/* Project 5 */}
                <div className="project-card">
                    <img src={Upcoming} alt="Project 5" />
                    <h3>Upcoming project</h3>
                    <p>I am currently working on several exciting new projects that focus on innovative software solutions and 
                        enhancing user experiences. Stay tuned for more updates as I continue to explore and implement cutting-edge 
                        technologies.
                    </p>
                    <button>
                        <a href="http://link-to-project5.com" target="_blank" rel="noopener noreferrer">Coming Soon...</a>
                    </button>
                </div>

                {/* Project 6 */}
                <div className="project-card">
                    <img src={Upcoming} alt="Project 6" />
                    <h3>Upcoming project</h3>
                    <p>I am currently working on several exciting new projects that focus on innovative software solutions and 
                        enhancing user experiences. Stay tuned for more updates as I continue to explore and implement cutting-edge 
                        technologies.
                    </p>
                    <button>
                        <a href="http://link-to-project6.com" target="_blank" rel="noopener noreferrer">Coming Soon...</a>
                    </button>
                </div>
            </div>

            {/* Services Section */}
            <div className="services-section">
                <h2>Let's go to the services</h2>
                <Link to="../pages/Service"><button className="service-button">Go to Services</button></Link>
            </div>
    </div>
    )
};

export default Project;