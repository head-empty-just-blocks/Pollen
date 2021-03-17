import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { Home, Example, Map, Login, Signup, SingleOrgView } from './pages/index';

export class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route path='/example' component={Example} />
				<Route path='/login' component={Login} />
				<Route path='/signup' component={Signup} />
				<Route path='/map/:id' component={SingleOrgView} />
				<Route path='/map' component={Map} />
				<Route path='/' component={Home} />
			</Switch>
		);
	}
}

export default withRouter(Routes);
