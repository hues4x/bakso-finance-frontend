import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/images/bkf_logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className={` header  m-0 px-0`}>
      <div className="container">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img src={logo} alt="" className="logo img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center align-items-center">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#products">OUR PRODUCTS</Nav.Link>
              <Nav.Link href="#roadmap">ROADMAP</Nav.Link>
              <Nav.Link href="#baksomania">BAKSO MANIA</Nav.Link>
              <Nav.Link href="#docs">DOCS</Nav.Link>
              <a href="/" target="blank" className="primaryBtn leftMargin">
                Launch App
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
