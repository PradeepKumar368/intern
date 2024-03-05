import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import NavBar from "../Navbar/Navbar";
import { useAuth } from "@/components/Auth/AuthContext";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignUp = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password, organization_name: organizationName, phone_no: phoneNo }),
      });

      if (response.ok) {
        console.log("User registered successfully!");
        login();
        navigate("/home");
      } else {
        console.error("User registration failed.");
      }
    } catch (error) {
      console.error("Error during user registration:", error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="signup-container relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
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
                  <h2 className="signup-header text-3xl text-cyan-900 font-bold">
                    Sign Up
                  </h2>
                  <h5 className="mb-4 text-xl text-cyan-900">
                    Welcome to eGyanam!
                  </h5>
                </div>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputUsername"
                      className="form-label"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputUsername"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputPassword5" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                      Must be 8-20 characters long, contain letters and numbers
                    </Form.Text>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputOrganizationName" className="form-label">
                      Organization
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputOrganizationName"
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputPhoneNo" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="inputPhoneNo"
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <p>
                      Already a student here?
                      <Link to="/login" className="text-blue-500 hover:outline">
                        Login
                      </Link>
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
    </div>
  );
}

export default SignUp;
