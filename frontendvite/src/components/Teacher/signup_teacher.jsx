import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function TeacherSignup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/teachersignup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (response.ok) {
        console.log('Teacher signup successful!');
        navigate('/');
        // You can redirect or perform any other action upon successful signup
      } else {
        console.error('Teacher signup failed.');
      }
    } catch (error) {
      console.error('Error during teacher signup:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-header">Teacher Signup</h2>
      {/* Form for teacher signup */}
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
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="d-grid gap-2">
          <p>
            Already a teacher? <Link to="/teacherlogin">Login</Link>
          </p>
          <Button variant="primary" onClick={handleSignup}>
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TeacherSignup;
