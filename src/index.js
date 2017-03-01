import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { Grid, Row, Col } from 'react-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from 'images/piterpy-logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/paper/bootstrap.css';
import 'main.css'

import store from 'store'
import App from 'modules/App/components/App'

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((<Provider store={store}><div>
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
	<Grid>
		<Row>
			<Col md={12}>
				<Router history={history}>
					<Route path="/" component={App} />
				</Router>
			</Col>
		</Row>
	</Grid>
	<footer className="ppy-footer">
		<p>&copy; 2017 Piter Py</p>
		<address>MIT Licensed. <a href="https://github.com/piterpy">Fork it!</a></address>
	</footer>
</div></Provider>), document.getElementById('root'));
