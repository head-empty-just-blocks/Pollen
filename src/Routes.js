import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {
  Home,
  Example,
  Map,
  SingleOrgView,
  AllProjects,
  AddProjectForm,
  AddOrg,
  MyAccount,
  Contact,
  About,
  Faq,
  SignUp,
  Login,
} from './pages'
import PropTypes from 'prop-types'
import {me} from './store'
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    return (
      <Switch>
        <Route path="/example" component={Example} />
        <Route path="/map/:id" component={SingleOrgView} />
        <Route path="/orgs/:id/projects/create" component={AddProjectForm} />
        <Route path="/orgs/create" component={AddOrg} />
        <Route path="/projects" component={AllProjects} />
        <Route path="/account" component={MyAccount} />
        <Route path="/map" component={Map} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={Faq} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    )
  }
}

const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me())
    },
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}
