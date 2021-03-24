import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchSingleOrg} from '../store/singleOrg'
import Loading from './Loading'

const SingleOrgView = (props) => {
  useEffect(() => {
    props.fetchOrg(props.match.params.id)
  }, [])

  if (!props.org) {
    return <Loading />
  }
  return (
    <div>
      <h1>{props.org.name}</h1>
      <div>{props.org.description}</div>
    </div>
  )
}

const mapState = (state) => {
  console.log('in mapState', state)
  return {
    org: state.singleOrg,
  }
}

const mapDispatch = (dispatch) => ({
  fetchOrg: (id) => dispatch(fetchSingleOrg(id)),
})

export default connect(mapState, mapDispatch)(SingleOrgView)
