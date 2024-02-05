import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import "./navbar.css"


function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar">
            <Container>
                {/* <Navbar.Brand href="home" className="mx-auto">eGyanam</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <NavDropdown title="Courses" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Blockchain</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Cyber Security
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Machine Learning</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Most Popular
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link eventKey={2} href="help">
                            Support
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="home" className="mx-auto">eGyanam</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link href="teacher">
                            <Button variant="outline-secondary" size="sm"> Instructor Mode </Button>
                        </Nav.Link>
                        <Nav.Link href="login">
                            <Button variant="outline-dark" >Login</Button>
                        </Nav.Link>
                        <Nav.Link href="signup">
                            <Button variant="outline-primary">Get Started</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;