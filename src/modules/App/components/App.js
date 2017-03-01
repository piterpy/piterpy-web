import React, { Component } from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import Home from 'modules/Home/components/Home'
import logo from 'images/piterpy-logo.png';

class App extends Component {
    render() {
        return ( <div>
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/"><img src={logo} alt="Piter Py" /></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem href="#">About</NavItem>
                        <NavItem href="#">Code of Conduct</NavItem>
                        <NavItem href="#">Call for Papers</NavItem>
                        <NavItem href="#">Speakers</NavItem>
                        <NavItem href="#">Schedule</NavItem>
                        <NavItem href="#">Organizers & sponsors</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem href="#">Org Zone</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {this.props.children || <Home />}
            <footer className="ppy-footer">
                <p>&copy; 2017 Piter Py</p>
                <address>MIT Licensed. <a href="https://github.com/piterpy">Fork it!</a></address>
            </footer>
        </div> );
    }
}

export default App;
