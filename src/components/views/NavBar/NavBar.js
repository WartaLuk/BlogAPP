import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <Nav bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
      <Container>
        <>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? StyleSheet.linkActive : undefined
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? StyleSheet.linkActive : undefined
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </>
      </Container>
    </Nav>
  );
};

export default NavBar;
