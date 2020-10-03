import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap'

import Logos from '../logos/Logos.js';

import Home from '../home/Home.js';
import About from '../about/About.js';

import HeaderLogo from '../../assets/images/svg/TetonBlocks_Header.svg';

function Dashboard() {
        
        return (
                <>
                <Router>
                <Container>

                <Navbar  expand="lg" variant="light">
                <Navbar.Brand href="/">
                        <img src={HeaderLogo} className="tb-header-logo" height="35" alt="" />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="nav-row">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About</Link>
                </Nav>

                </Navbar.Collapse>
                </Navbar>

                <Switch>

                <Route exact path="/"><Home /></Route>
                <Route exact path="/About"><About /></Route>

                </Switch>
                </Container>
                </Router>

                </>
        );
}

export default Dashboard;
