import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchSingleOrg} from '../store/singleOrg'
import {fetchProjects} from '../store/allProjects'
import Loading from './Loading'
import DonationForm from './SingleOrgComponents/DonationForm'
import SingleProject from './SingleOrgComponents/SingleProject'

const SingleOrgView = ({match, fetchOrg, fetchProjects, org, projects}) => {
  useEffect(() => {
    fetchOrg(match.params.id)
    fetchProjects(match.params.id)
  }, [])

  if (!org) {
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
          <h1>{org.name}</h1>
          <p>{org.description}</p>
        </div>
      </div>
      <div className="orgProjects">
        <h2>Projects</h2>
        <div>
          {projects.map((project) => (
            <div key={project.id}>
              <SingleProject {...project} />
              <DonationForm
                projectId={project.id}
                orgId={project.organizationId}
              />
            </div>
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
