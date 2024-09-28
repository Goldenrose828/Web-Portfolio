import React, { useState } from 'react';
import './contact.css';

const Contact = () =>{

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNo: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // You can integrate form submission logic here
      };

    return (
        <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Contact Me</h2>
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="contactNo"
                    placeholder="Contact Number"
                    value={formData.contactNo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>            
    )
};

export default Contact;