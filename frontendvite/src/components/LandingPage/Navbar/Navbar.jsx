import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <div className="shadow">
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
          <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
            eGyanam Advance
          </span>
        </Navbar.Brand>
        {/* <div className="flex md:order-2">
                <Button as={Link} to="/signup">Get started</Button>
                <Navbar.Toggle />
            </div> */}
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
        {/* <Navbar.Brand as={Link} to="/" className="mx-auto">eGyanam</Navbar.Brand> */}
        <Navbar.Collapse>
          <div className="flex items-center space-x-4 md:space-x-6">
            <Button
              as={Link}
              to="/teacherlogin"
              outline
              gradientDuoTone="cyanToBlue"
            >
              Instructor Mode
            </Button>
            <Button as={Link} to="/login" gradientMonochrome="cyan">
              Login
            </Button>
            <Button as={Link} to="/signup" gradientMonochrome="cyan">
              Get started
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
