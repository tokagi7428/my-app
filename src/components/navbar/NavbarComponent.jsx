import React, { useState } from "react";
import { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../reducer/Store";
import "./navbar.css";
function NavbarComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useContext(UserContext);
  // console.log(state);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className="navbarCom">
      <Navbar
        expand="md"
        variant={isScrolled ? "dark" : isOpen ? "dark" : "Success"}
        bg={isScrolled ? "dark" : isOpen ? "dark" : "transparent"}
        className="position-fixed w-100 top-0 py-3 "
        style={{ zIndex: 999 }}
      >
        <div className="container-fluid">
          <Link to="/" className="nav-link link">
            <Navbar.Brand>Logo</Navbar.Brand>
          </Link>
          <Navbar.Toggle
            aria-controls="nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
          />
          <Navbar.Collapse id="nav-toggle">
            <Nav className="justify-content-end me-auto w-100">
              <Link to="/" className="nav-link link px-3 px-lg-0">
                Home
              </Link>
              <Link to="/aboutUs" className="nav-link link px-3 px-lg-0">
                About us
              </Link>
              <Link to="/contact" className="nav-link link px-3 px-lg-0">
                Contact
              </Link>

              {state.userInfo.status ? (
                <Link to="/user" className="nav-link link px-3 px-lg-0">
                  {state.userInfo.email}
                </Link>
              ) : (
                <Link to="/login" className="nav-link link px-3 px-lg-0">
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
