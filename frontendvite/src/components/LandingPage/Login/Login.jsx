// Import React, useState, and useNavigate from react-router-dom
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./login.css";
import NavBar from "../Navbar/Navbar";

function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, password }),
      });

      if (response.ok) {
        console.log("Login successful!");
        navigate("/ViewCourses");
      } else {
        console.error("Login failed.");
      }
    } catch (error) {
      console.error("Error during login:", error);
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
                  <h2 className="text-3xl text-cyan-900 font-bold">Sign in</h2>
                  <h5 className="mb-4 text-xl text-cyan-900">
                    {" "}
                    Welcome back to eGyanam!
                  </h5>
                </div>
                <div className="flex flex-col items-center mb-2">
                  <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 mb-2">
                    <div className="relative flex items-center space-x-4 justify-center">
                      <img
                        src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                        className="absolute left-0 w-5 "
                        alt="google logo"
                      />
                      <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base pl-5 ">
                        Continue with Google
                      </span>
                    </div>
                  </button>
                  <div className="flex justify-center">
                    <h6>or</h6>
                  </div>
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
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Remember me
                    </label>
                  </div>
                  <div className="d-grid gap-2">
                    <p>
                      Start Learning with us!
                      <Link
                        to="/signup"
                        className="text-blue-500 hover:outline"
                      >
                        {" "}
                        Sign Up here
                      </Link>
                    </p>
                    <Button variant="outline-primary" onClick={handleLogin}>
                      Login
                    </Button>
                  </div>
                </form>
                <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                  <p className="text-xs">
                    By proceeding, you agree to our{" "}
                    <a href="#" className="underline">
                      Terms of Use
                    </a>{" "}
                    and confirm you have read our{" "}
                    <a href="#" className="underline">
                      Privacy and Cookie Statement
                    </a>
                    .
                  </p>
                  <p className="text-xs">
                    This site is protected by reCAPTCHA and the{" "}
                    <a href="#" className="underline">
                      Google Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline">
                      Terms of Service
                    </a>{" "}
                    apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
