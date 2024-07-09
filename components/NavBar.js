/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>React Topics</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/events">
              <Nav.Link>Events</Nav.Link>
            </Link>
            <Link passHref href="/props">
              <Nav.Link>Props</Nav.Link>
            </Link>
            <Link passHref href="/hooks">
              <Nav.Link>Hooks</Nav.Link>
            </Link>
            <Link passHref href="/routes">
              <Nav.Link>Routes</Nav.Link>
            </Link>
            <Link passHref href="/forms">
              <Nav.Link>Forms</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
