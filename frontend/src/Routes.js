import React, { Component } from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Home} from './pages/index'

export class Routes extends Component {
    render() {
        return (
            <Switch>
               <Route path="/" component={Home} />
            </Switch>
        )
    }
}

export default withRouter(Routes)
