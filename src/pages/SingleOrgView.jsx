import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchSingleOrg} from '../store/singleOrg'
import {fetchProjects} from '../store/allProjects'
import Loading from './Loading'
import DonationFrom from './SingleOrgComponents/DonationForm'
import SingleProject from './SingleOrgComponents/SingleProject'

const SingleOrgView = (props) => {
  useEffect(() => {
    props.fetchOrg(props.match.params.id)
    props.fetchProjects(props.match.params.id)
  }, [])

  if (!props.org) {
    return <Loading />
  }
  return (
    <div className="singleOrg">
      <div className="orgDetails">
        <img
          className="orgImg"
          src="/assets/globe.png"
          alt="hands holding up a globe"
        />
        <div className="orgInfo">
          <h1>{props.org.name}</h1>
          <p>{props.org.description}</p>
          <DonationFrom />
        </div>
      </div>
      <div className="orgProjects">
        <h2>Projects</h2>
        <div>
          {props.projects.map((project) => (
            <SingleProject key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

const mapState = (state) => {
  console.log('in mapState', state)
  return {
    org: state.singleOrg,
    projects: state.allProjects,
  }
}

const mapDispatch = (dispatch) => ({
  fetchOrg: (id) => dispatch(fetchSingleOrg(id)),
  fetchProjects: (id) => dispatch(fetchProjects(id)),
})

export default connect(mapState, mapDispatch)(SingleOrgView)
