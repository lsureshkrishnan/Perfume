import React, { useState } from "react";
import './Signup.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate(); // Declare the useNavigate hook for redirection

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make sure to match the API URL with your backend server
      const response = await axios.post('http://localhost:5000/signup', formData);

      if (response.status === 201) {
        setMessage('Signup successful!');
        setFormData({ name: '', email: '', password: '' });
        navigate('/home'); // Navigate to home after successful signup
      }
    } catch (error) {
      setMessage('Signup failed. Please try again.');
    }
  };

  // Define the handleBack function
  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="modal-backdrop-11">
      <div className="modal-content-12">
        <button className="back-btn-13" onClick={handleBack}>Back</button>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group-14">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group-15">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group-16">
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button type="submit" className="submit-btn-17">Sign Up</button>
        </form>
        {message && <p>{message}</p>} {/* Display any success or error message */}
      </div>
    </div>
  );
};

export default Signup; // Keep the export consistent with the component name
