import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useAuth } from "../Auth/AuthContext";
import NavBar from "../LandingPage/Navbar/Navbar";

function TeacherSignup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/teachersignup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password, organization_name: organizationName, phone_no: phoneNo }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Teacher signup successful!");
        console.log(data.access_token, data.user.id);
        login(data.access_token, data.user.id);
        navigate("/teacherdashboard");
        // You can redirect or perform any other action upon successful signup
      } else {
        console.error("Teacher signup failed.");
      }
    } catch (error) {
      console.error("Error during teacher signup:", error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-16">
                <div className="space-y-4">
                  <img
                    src="https://tailus.io/sources/blocks/social/preview/images/icon.svg"
                    loading="lazy"
                    className="w-10"
                    alt="tailus logo"
                  />
                  <h2 className="text-3xl text-cyan-900 font-bold">
                    Teacher Sign Up
                  </h2>
                  <h5 className="mb-4 text-xl text-cyan-900">
                    Welcome to eGyanam!
                  </h5>
                </div>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleInputEmail1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleInputUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleInputPassword1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                      Must be 8-20 characters long, contain letters and numbers
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="inputOrganizationName">
                    <Form.Label>Organization</Form.Label>
                    <Form.Control
                      type="text"
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="inputPhoneNo">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                    />
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <p>
                      Already a teacher?
                      <Link
                        to="/teacherlogin"
                        className="text-blue-500 hover:outline"
                      >
                        {" "}
                        Login
                      </Link>
                    </p>
                    <Button variant="outline-primary" onClick={handleSignup}>
                      Sign Up
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherSignup;
