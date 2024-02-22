// // Import React, useState, and useNavigate from react-router-dom
import { useState } from 'react';
import { useNavigate ,Link } from 'react-router-dom';
import { Form,Button } from 'react-bootstrap';



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
        navigate('/ViewCourses');
      } else {
        console.error('User registration failed.');
      }
    } catch (error) {
      console.error('Error during user registration:', error);
    }
  };

  return (
    <div className="signup-container relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">  
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-16">
              <div className="space-y-4">
              <img src="https://tailus.io/sources/blocks/social/preview/images/icon.svg" loading="lazy" className="w-10" alt="tailus logo" />
                <h2 className="signup-header text-3xl text-cyan-900 font-bold">Sign Up</h2>
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
                    Must be 8-20 characters long, contain letters and numbers
                  </Form.Text>
                </div>
                <div className="d-grid gap-2">
                <p>
                    Already a student here? 
                    <Link to="/login" className="text-blue-500 hover:outline"> Login</Link>
                  </p>
                  <Button variant="outline-primary" onClick={handleSignUp}>
                    Sign Up
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
// Import React, useState, and useNavigate from react-router-dom
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Form, Button } from 'react-bootstrap';
// import "./signup.css";


// function SignUp() {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignUp = async () => {
//     try {
//       // Make API request to Django backend for user registration
//       const response = await fetch('http://localhost:8000/api/signup/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, username, password }),
//       });

//       if (response.ok) {
//         console.log('User registered successfully!');
//         navigate('/mycourses');
//       } else {
//         console.error('User registration failed.');
//       }
//     } catch (error) {
//       console.error('Error during user registration:', error);
//     }
//   };

//   return (
//     <div className="signup-container">
//       {/* Form for user registration */}
//       <h2 className="signup-header">Sign Up</h2>
//       <p className="text">Welcome to eGyanam !</p>
//       <form>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//           <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputUsername" className="form-label">Username</label>
//           <input type="text" className="form-control" id="exampleInputUsername" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </div>
//         <div className="mb-3">
//           <Form.Label htmlFor="inputPassword5">Password</Form.Label>
//           <Form.Control
//             type="password"
//             id="inputPassword5"
//             aria-describedby="passwordHelpBlock"
//             value={password} onChange={(e) => setPassword(e.target.value)}
//           />
//           <Form.Text id="passwordHelpBlock" muted>
//             must be 8-20 characters long, contain letters and numbers
//           </Form.Text>
//         </div>
//         <div className="d-grid gap-2">
//           <Button variant="outline-primary"  onClick={handleSignUp}>
//             Sign Up
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default SignUp;