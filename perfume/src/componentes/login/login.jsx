import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './login.css'; // Import external CSS
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Form state for email and password
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // State for displaying messages
  const [message, setMessage] = useState('');

  // Handle input field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form refresh on submit
    try {
      const response = await axios.post('http://localhost:5000/login', formData);

      if (response.status === 200 && response.data === "Success") { // Successful login
        setMessage('Login successful!');
        setFormData({ email: '', password: '' }); // Reset form fields
        navigate('/nav'); // Navigate to home after successful login
      } else {
        setMessage('Incorrect email or password.'); // Show failure message
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage('Login failed. Please try again.'); // Show error message
    }
  };

  // Handle back button click
  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="modal-backdrop-30">
      <div className="modal-content-30">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group-30">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Email" 
              required 
            />
          </div>
          <div className="form-group-30">
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              placeholder="Password" 
              required 
            />
          </div>
          <button type="submit" className="submit-btn-30">Login</button>
        </form>
        <button className="back-btn-30" onClick={handleBack}>Back</button>
        {message && <p>{message}</p>} {/* Display any login message */}
      </div>
    </div>
  );
};

export default Login;
