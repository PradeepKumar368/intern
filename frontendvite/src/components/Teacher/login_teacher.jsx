// TeacherLogin.js

import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function TeacherLogin() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/teacherlogin/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier, password }),
      });

      if (response.ok) {
        console.log('Teacher login successful!');
        navigate('/');
        // You can redirect or perform any other action upon successful login
      } else {
        console.error('Teacher login failed.');
      }
    } catch (error) {
      console.error('Error during teacher login:', error);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Teacher Login</h2>
      {/* Form for teacher login */}
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address or username</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="d-grid gap-2">
          <p>
            start teaching? <Link to="/teachersignup">SignUp</Link>
          </p>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TeacherLogin;
