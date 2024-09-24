import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]:
            e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -100%)' }}>
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange} />
                <input type="text" name="lastName" 
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange} />
                <br />
                <input type="text" name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange} />
                <input type="email" name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange} />
                <br />
                <input type="text" name="message"
                placeholder="Content of message"
                value={formData.message}
                onChange={handleChange} size="50" />
                <br />
                <input type="submit" value="Send" onSubmit={handleSubmit} /> 
            </form>
        </div>
    );
};

export default Contact;