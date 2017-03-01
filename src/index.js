import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/paper/bootstrap.css';
import 'main.css'

import store from 'store'
import App from 'modules/App/components/App'
import Home from 'modules/Home/components/Home'

const history = syncHistoryWithStore( browserHistory, store )

ReactDOM.render(( <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
        </Route>
    </Router>
</Provider> ), document.getElementById( 'root' ) );
