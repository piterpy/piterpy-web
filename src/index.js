import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { Grid, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/paper/bootstrap.css'

import store from 'store'
import App from 'modules/App/components/App'

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((<Provider store={store}>
	<Grid>
		<Row>
			<Col md={12}>
				<Router history={history}>
					<Route path="/" component={App} />
				</Router>
			</Col>
		</Row>
	</Grid>
</Provider>), document.getElementById('root'));
