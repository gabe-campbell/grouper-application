import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import "./App.css";

function App(props) {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);

    props.history.push("/login");
  }

  return (
    !isAuthenticating && (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Grouper</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
	    <Nav justify-content-center>
              {isAuthenticated ? (
                <>
                  <LinkContainer to="/calendar">
                    <NavItem>Calendar</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/files">
                    <NavItem>Fileshare</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/messenger">
                    <NavItem>Messenger</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/notes">
                    <NavItem>Notes</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/scrum">
                    <NavItem>Scrum</NavItem>
                  </LinkContainer>
                </>
              ) : (<></>)}
            </Nav>
            <Nav pullRight>
              {isAuthenticated ? (
                <>
                  <LinkContainer to="/settings">
                    <NavItem>Settings</NavItem>
                  </LinkContainer>
                  <NavItem onClick={handleLogout}>Logout</NavItem>
                </>
              ) : (
                <>
                  <LinkContainer to="/signup">
                    <NavItem>Signup</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
      </div>
    )
  );
}

export default withRouter(App);
