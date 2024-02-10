
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import {NavLink} from "react-router-dom";
//import NavDropdown from 'react-bootstrap/NavDropdown';
import "./nav1.css";
function Nav1() {
  return (
    <div className='header2'>
    <Navbar expand="lg" className="bg-body-red">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">FEATURES</Nav.Link>
            <Nav.Link href="courses">COURSES</Nav.Link>
           
            <Nav.Link href="#home">STUDENT LIFE</Nav.Link>
            <Nav.Link href="#home">CAREER SUPPORT</Nav.Link>
            <Nav.Link href="about">ABOUT US</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  );
}

export default Nav1;