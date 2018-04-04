import React, { Component }  from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../css/Navigation.css';
import withAuth from './withAuth'
import AuthService from '../services/AuthService'
import { Redirect } from 'react-router-dom'

const Auth = new AuthService()

export default class Navigation extends Component {

  handleLogout(){
    Auth.logout()
  }


  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">HotSpotz</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <div className = "space">
          <NavItem className = "hello" eventKey={1} href="/register">
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
          <NavItem className = "hello2" onClick={this.handleLogout.bind(this)} href={'/login'}>Logout</NavItem>
          </div>
        </Nav>
      </Navbar>
)
}
};
