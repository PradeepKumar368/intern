// Import React, useState, and useNavigate from react-router-dom
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  Button } from 'react-bootstrap';
import "./login.css"

function Login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier, password }),
      });

      if (response.ok) {
        console.log('Login successful!');
        navigate('/mycourses');
      } else {
        console.error('Login failed.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <p className="text">Welcome back!</p>
      {/* Form for user login */}
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <div className="d-grid gap-2">
          <Button variant="primary"  onClick={handleLogin}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
