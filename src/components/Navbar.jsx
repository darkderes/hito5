import { Link } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  FaPizzaSlice,
  FaSignInAlt,
  FaUserPlus,
  FaUser,
  FaSignOutAlt,
  FaShoppingCart,
} from "react-icons/fa";

const NavbarApp = () => {
  const total = 25000;
  const token = true;
  return (
    <Navbar
      className="bg-body-tertiary text-white "
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">Pizzeria Mamma Mia!</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="nav-link-border">
            <FaPizzaSlice /> Home
          </Link>
          {!token ? (
            <>
              <Link
                to="/login"
                className="nav-link-border"
                style={{ textDecoration: "none" }}
              >
                <FaSignInAlt /> Login
              </Link>

              <Link
                to="/register"
                className="nav-link-border"
                style={{ textDecoration: "none" }}
              >
                <FaUserPlus /> Register
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="nav-link-border">
                <FaUser /> Profile
              </Link>
              <Link
                to="/login"
                className="nav-link-border"
                style={{ textDecoration: "none" }}
              >
                <FaSignOutAlt /> Logout
              </Link>
            </>
          )}
        </Nav>

        <Navbar.Collapse className="justify-content-end">
          <Nav.Item>
            <Link
              to="/cart"
              className="nav-link-border-cart nav-link-custom"
              style={{ textDecoration: "none" }}
            >
              <FaShoppingCart /> $ {total.toLocaleString()}
            </Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;
