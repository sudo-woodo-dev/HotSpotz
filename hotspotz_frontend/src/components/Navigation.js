import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../css/Navigation.css';

const Navigation = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">HotSpotz</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <div className = "space">
      <NavItem className = "hello" eventKey={1} href="/home">
        <b>Register</b>
      </NavItem>
      <NavItem className = "hello" eventKey={2} href="/login">
        Login
      </NavItem>
      <NavItem className = "hello2" eventKey={5} href="/profile">
        Profile
      </NavItem>
      <NavItem className = "hello2" eventKey={5} href="/review">
        Review
      </NavItem>
      <NavItem className = "hello2" eventKey={5} href="/newreview">
        Submit New Review
      </NavItem>
      </div>
    </Nav>
  </Navbar>
);



export default Navigation;
