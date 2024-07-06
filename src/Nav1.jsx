import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Nav1() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home" >
        <Nav.Item>
          <Link to="/" style={{ color: 'black' }}>Home</Link>
        </Nav.Item>
        <NavDropdown
              id="nav-dropdown-dark-example"
              title="Categories"
              menuVariant="dark"
              className="custom-nav-dropdown"
            >
              <Link to="/chinese"><NavDropdown.Item href="/chinese">Chinese</NavDropdown.Item></Link>
              <Link to="/thai"><NavDropdown.Item href="thai">
                Thai
              </NavDropdown.Item></Link>
              <Link to="/indian"><NavDropdown.Item href="#action/3.3">Indian</NavDropdown.Item></Link>
              <NavDropdown.Item href="#action/3.3">Italian</NavDropdown.Item>
              <Link to="/milkshake"><NavDropdown.Item href="/milkshake">Milkshake</NavDropdown.Item></Link>
            </NavDropdown>
        <Nav.Item>
        <Link  to="/about" style={{ color: 'black' }}>About Us</Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Nav1;