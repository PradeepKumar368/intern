import { Navbar } from "flowbite-react";
import { Avatar } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/components/Auth/AuthContext";

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

  return (
    <div className="shadow mt-[-2px]">
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white ml-4">
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
          <Avatar
            img={studentProfile.profile_picture_url}
            placeholderInitials={studentProfile.username.charAt(0).toUpperCase()}
            className="w-full h-full object-cover cursor-pointer mr-4"
            rounded
            bordered
          >
            <div className="space-y-1 font-medium dark:text-white">
              <div>{studentProfile.username}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {studentProfile.email}
              </div>
            </div>
          </Avatar>
          {/* {studentProfile && ( // Conditionally render if studentProfile exists
            <div className="flex items-center space-x-6 md:space-x-1">
              {studentProfile.username && (
                <span>{studentProfile.username}</span>
              )}
              {studentProfile.email && <span>{studentProfile.email}</span>} */}
          {/* Add logout button */}
          {/* <Button outline gradientDuoTone="cyanToBlue" onClick={logout}>
                Logout
              </Button> */}
          {/* </div>
          )} */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar_postauth;
