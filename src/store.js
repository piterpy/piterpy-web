import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk';
import App from 'modules/App/reducers'

const store = createStore(
	combineReducers({
		App,
		routing: routerReducer
	}),
	applyMiddleware(thunk)	
)

export default store;
