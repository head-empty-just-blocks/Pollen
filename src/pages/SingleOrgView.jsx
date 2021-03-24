import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleOrg} from '../store/singleOrg'
import Loading from './Loading'

export class SingleOrgView extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id)
    this.props.fetchOrg(this.props.match.params.id)
  }
  render() {
    const org = this.props.org || {}
    if (Object.keys(org).length) {
      return (
        <div>
          <h1>{org.name}</h1>
          <div>{org.description}</div>
        </div>
      )
    } else return <Loading />
  }
}

const mapState = (state) => ({
  org: state.org,
})

const mapDispatch = (dispatch) => ({
  fetchOrg: (id) => dispatch(fetchSingleOrg(id)),
})

export default connect(mapState, mapDispatch)(SingleOrgView)
