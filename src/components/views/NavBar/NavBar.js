import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    // variant ???
    <Navbar sticky="top" bg="primary" variant="dark"
     expand="lg" className="me-auto mt-4 mb-4 rounded">
      <Container>
        <>
        <h3 className="text-light">
              BLOG.app
            </h3>
          <Nav>
            <Nav.Link
              as={NavLink}
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
            >
              About
            </Nav.Link>
          </Nav>
        </>
      </Container>
    </Navbar>
  );
};

export default NavBar;
