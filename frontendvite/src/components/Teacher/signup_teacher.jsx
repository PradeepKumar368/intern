import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

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
    <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">  
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-16">
              <div className="space-y-4">
                <img src="https://tailus.io/sources/blocks/social/preview/images/icon.svg" loading="lazy" className="w-10" alt="tailus logo" />
                <h2 className="text-3xl text-cyan-900 font-bold">Teacher Sign Up</h2>
                <h5 className="mb-4 text-xl text-cyan-900">Welcome to eGyanam!</h5>
              </div>
              <div className="flex flex-col items-center mb-2">
                <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 mb-2">
                  <div className="relative flex items-center space-x-4 justify-center">
                    <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5 " alt="google logo" />
                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base pl-5 ">Continue with Google</span>
                  </div>
                </button>
                <div className='flex justify-center'>
                  <h6>or</h6>
                </div>
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="exampleInputEmail1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleInputUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleInputPassword1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <Form.Text id="passwordHelpBlock" muted>
                    Must be 8-20 characters long, contain letters and numbers
                  </Form.Text>
                </Form.Group>

                <div className="d-grid gap-2">
                  <p>
                    Already a teacher? 
                    <Link to="/teacherlogin" className="text-blue-500 hover:outline"> Login</Link>
                  </p>
                  <button className="btn btn-active btn-primary" onClick={handleSignup}>
                    Sign Up
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherSignup;
