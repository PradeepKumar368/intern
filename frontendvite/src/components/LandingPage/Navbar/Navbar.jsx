import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";

function NavBar() {
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
          <Navbar.Link as={Link} to="/" active className="text-black">
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} to="/about" className="text-black">
            About
          </Navbar.Link>
          <Navbar.Link as={Link} to="/services" className="text-black">
            Courses
          </Navbar.Link>
          <Navbar.Link as={Link} to="/contact" className="text-black">
            Contact Us
          </Navbar.Link>
        </Navbar.Collapse>
        <Navbar.Collapse>
          <div className="flex items-center space-x-6 md:space-x-1">
            <Button
              as={Link}
              to="/teacherlogin"
              gradientDuoTone="none"
            >
              Am a tutor
            </Button>
            <Button
              outline
              gradientDuoTone=""
              as={Link}
              to="/login"
              gradientMonochrome="none"
            >
              Login
            </Button>
            <Button
              outline
              gradientDuoTone="orange"
              as={Link}
              to="/signup"
              gradientMonochrome="none"
            >
              Get started
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
