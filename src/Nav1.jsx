import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function Nav1() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home" >
        <Nav.Item>
          <Nav.Link href="/home" style={{ color: 'black' }}>Home</Nav.Link>
        </Nav.Item>
        <NavDropdown
              id="nav-dropdown-dark-example"
              title="Categories"
              menuVariant="dark"
              className="custom-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Chinese</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Thai
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Indian</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Italian</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Milkshake</NavDropdown.Item>
            </NavDropdown>
        <Nav.Item>
          <Nav.Link eventKey="link-2" style={{ color: 'black' }}>About Us</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Nav1;