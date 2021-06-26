import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/logo.png"

import  { Container, Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>
      <Container>
        <Navbar expand="lg" collapseOnSelect={true}>
            <Link to="/">
              <img src={logo} alt="s" width="173" />
            </Link>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="text-center ml-auto">
              <ul className="navbar-nav">
              <li>
                  <Link to="/" className="nav-link px-5 text-dark font-weight-bold" activeClassName="active">Home</Link> 
                </li>
                <li>
                  <Link to="/services/" className="nav-link px-5 text-dark font-weight-bold" activeClassName="active">Services</Link> 
                </li>
                <li>
                  <Link to="/blog/" className="nav-link px-5 text-dark font-weight-bold" activeClassName="active">Blog</Link> 
                </li>
                <li>
                  <Link to="/contact/" className="nav-link px-5 text-dark font-weight-bold" activeClassName="active">Contact Us</Link> 
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
