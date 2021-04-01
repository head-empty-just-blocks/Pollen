import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchSingleOrg} from '../store/singleOrg'
import {fetchProjects} from '../store/allProjects'

const FlowerSettings = ({fetchOrg, user, org, projects}) => {
  useEffect(() => {
    fetchOrg(user.organizationId)
    fetchProjects(user.organizationId)
  }, [])
  return (
    <div>
      <img className="sprite" src="/assets/flower.png" />
      <h2>{org.name}</h2>
      <Link to={`/orgs/${org.id}/projects/create`}>
        <button>CREATE NEW PROJECT</button>
      </Link>
      <div>
        {projects.map((project) => (
          <div>
            <div>{project.title}</div>
            <div>
              ${project.currentAmount} / {project.goalAmount}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapState = (state) => ({
  user: state.user,
  org: state.singleOrg,
  projects: state.allProjects,
})

const mapDispatch = (dispatch) => ({
  fetchOrg: (id) => dispatch(fetchSingleOrg(id)),
  fetchProjects: (id) => dispatch(fetchProjects(id)),
})

export default connect(mapState, mapDispatch)(FlowerSettings)
