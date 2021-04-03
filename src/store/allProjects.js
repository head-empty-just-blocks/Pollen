import Axios from 'axios'

// action type
const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS'
const CREATE_PROJECT = 'CREATE_PROJECT'
const DONATE_TO_PROJECT = 'DONATE_TO_PROJECT'

// action creator
export const getAllProjects = (projects) => {
  return {
    type: GET_ALL_PROJECTS,
    projects,
  }
}

const createProject = (project) => {
  return {
    type: CREATE_PROJECT,
    project,
  }
}

const donateToProject = (projectId, donation) => {
  return {
    type: DONATE_TO_PROJECT,
    projectId,
    donation,
  }
}

// thunks
export const fetchProjects = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await Axios.get(`/api/orgs/${id}/projects/`)
      console.log('data in fetchProjects', data)
      dispatch(getAllProjects(data))
    } catch (error) {
      console.log('fetchProjects thunk')
      console.error(error)
    }
  }
}
export const postProject = (orgId, project) => {
  return async (dispatch) => {
    try {
      const {data} = await Axios.post(`/api/orgs/${orgId}/projects`, project)
      dispatch(createProject(data))
    } catch (error) {
      console.log('postProject thunk')
      console.error(error)
    }
  }
}

export const donateThunk = (orgId, projectId, donation) => {
  return async (dispatch) => {
    try {
      await Axios.put(`/api/orgs/${orgId}/projects/${projectId}/donate`, {
        donation,
      })
      dispatch(donateToProject(projectId, donation))
    } catch (error) {
      console.log('donateThunk')
      console.error(error)
    }
  }
}

// initial state
const initialState = []

// reducer
export default function allProjectsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PROJECTS:
      console.log(action.projects)
      return action.projects
    case CREATE_PROJECT:
      return [...state, action.project]
    case DONATE_TO_PROJECT: {
      const updatedState = state.map((project) => {
        if (project.id === action.projectId) {
          project.currentAmount = +project.currentAmount + +action.donation
        }
        return project
      })
      return updatedState
    }
    default:
      return state
  }
}
