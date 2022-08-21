import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <Nav>
      <nav>
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
      </nav>
    </Nav>
  );
};

export default NavBar;
