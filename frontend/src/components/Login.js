import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  
  const handleLogin = async () => {
    try {
      console.log(`Attempting login with username: ${username}`);
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        const accessToken = data.access;
  
        // Debugging console logs
        console.log('User logged in successfully!', accessToken);
        console.log('Received data:', data);
        setLoginMessage('Login successful!');
      } else {
        console.error('User login failed.');
      }
    } catch (error) {
      console.error('Error during user login:', error);
    }
  };
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Link to="/">Back to Home</Link>
      <button onClick={handleLogin}>Login</button>
      {loginMessage && <p>{loginMessage}</p>}
    </div>
  );
}

export default Login;
