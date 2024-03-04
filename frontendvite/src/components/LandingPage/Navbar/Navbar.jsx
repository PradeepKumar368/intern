import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";



function NavBar() {
  return (
    <div className="shadow mt-[-2px]">
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
          < div className="flex items-center space-x-6 md:space-x-1">
            <Button
              as={Link}
              to="/teacherlogin"
              gradientDuoTone="none"

            >
              Am a tutor
            </Button>
            
              <Button outline gradientDuoTone="cyanToBlue"
                as={Link}
                to="/login"
                gradientMonochrome="none">
                Login
              </Button>
            
            <Button outline gradientDuoTone="cyanToBlue" as={Link} to="/signup" gradientMonochrome="none">
              Get started
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;