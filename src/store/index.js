import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import allOrgs from './allOrgs'
import singleOrg from './singleOrg'
import allProjects from './allProjects'
import singleProject from './singleProject'

const reducer = combineReducers({
	user,
	allOrgs,
	singleOrg,
	allProjects,
	singleProject,
})

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(reducer, middleware)

export default store
export * from './user'
