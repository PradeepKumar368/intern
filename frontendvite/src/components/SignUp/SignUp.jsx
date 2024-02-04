// Import React, useState, and useNavigate from react-router-dom
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import "./signup.css"


function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      // Make API request to Django backend for user registration
      const response = await fetch('http://localhost:8000/api/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (response.ok) {
        console.log('User registered successfully!');
        navigate('/');
      } else {
        console.error('User registration failed.');
      }
    } catch (error) {
      console.error('Error during user registration:', error);
    }
  };

  return (
    <div className="signup-container">
      {/* Form for user registration */}
      <h2 className="signup-header">Sign Up</h2>
      <p className="text">Welcome to eGyanam !</p>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputUsername" className="form-label">Username</label>
          <input type="text" className="form-control" id="exampleInputUsername" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Text id="passwordHelpBlock" muted>
            must be 8-20 characters long, contain letters and numbers
          </Form.Text>
        </div>
        <div className="d-grid gap-2">
          <Button variant="primary"  onClick={handleSignUp}>
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
