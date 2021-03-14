import React, { Component } from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Home, Example, Login, Signup, Projects, SingleOrgView} from './pages/index'

export class Routes extends Component {
    render() {
        return (
            <Switch>
               <Route path="/example" component={Example} />
               <Route path="/login" component={Login} />
               <Route path="/signup" component={Signup} />
               <Route path="/projects/:id" component={SingleOrgView} />
               <Route path="/projects" component={Projects} />
               <Route path="/" component={Home} />
            </Switch>
        )
    }
}

export default withRouter(Routes)
