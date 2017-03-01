import { combineReducers } from 'redux';
import { STORE_PAGES } from './actions';

const pages = (state = [], action) => {
	switch (action.type) {
	case STORE_PAGES:
		return action.pages
	default:
		return state
	}
}

const App = combineReducers({
	pages
});

export default App;
