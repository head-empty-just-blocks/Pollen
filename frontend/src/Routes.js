import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import { Home, Example, Map, Login, SingleOrgView } from './pages';
import PropTypes from 'prop-types';
import { me } from './store';
class Routes extends Component {
	componentDidMount() {
		this.props.loadInitialData();
	}

	render() {
		return (
			<Switch>
				<Route path='/example' component={Example} />
				<Route path='/login' component={Login} />
				<Route path='/map/:id' component={SingleOrgView} />
				<Route path='/map' component={Map} />
				<Route exact path='/' component={Home} />
			</Switch>
		);
	}
}

const mapState = state => {
	return {
		// Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
		// Otherwise, state.user will be an empty object, and state.user.id will be falsey
		isLoggedIn: !!state.user.id
	};
};

const mapDispatch = dispatch => {
	return {
		loadInitialData() {
			dispatch(me());
		}
	};
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

Routes.propTypes = {
	loadInitialData: PropTypes.func.isRequired,
	isLoggedIn: PropTypes.bool.isRequired
};
