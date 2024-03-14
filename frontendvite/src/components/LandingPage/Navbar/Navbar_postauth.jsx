import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/components/Auth/AuthContext";
import { Avatar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { ShoppingCart } from 'lucide-react';

function NavBar_postauth() {
  const { userId } = useAuth();
  const [studentProfile, setStudentProfile] = useState(null);
  console.log("Calling after authentication");
  console.log("userid", userId);

  useEffect(() => {
    if (userId) {
      fetch(`http://127.0.0.1:8000/api/studentprofile/${userId}`)
        .then((response) => response.json())
        .then((data) => setStudentProfile(data))
        .catch((error) =>
          console.error("Error fetching student profile:", error)
        );
    }
  }, [userId]);

  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };


  return (
    <div className="shadow mt-[-2px]">
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
            eGyanam Advance
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link as={Link} to="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} to="/about">
            About
          </Navbar.Link>
          <Navbar.Link as={Link} to="/services">
            Courses
          </Navbar.Link>
          <Navbar.Link as={Link} to="/contact">
            Contact Us
          </Navbar.Link>
        </Navbar.Collapse>
        <Navbar.Collapse>
           <div className="flex items-center justify-end space-x-6 md:space-x-1">
            <div className="hidden md:block mr-3">
           <ShoppingCart />
           </div>
            <Dropdown
              label=""
              dismissOnClick={false}
              renderTrigger={() => (
                <span className="flex">
                  <Avatar
                    placeholderInitials={getInitials(studentProfile?.username)}
                  />
                  {studentProfile?.username && (
                    <span className="mt-2 ml-1.5">{studentProfile.username}</span>
                  )}
                </span>
              )}
            >
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar_postauth;
