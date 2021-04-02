import Axios from 'axios'

// action type
const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS'
const CREATE_PROJECT = 'CREATE_PROJECT'

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
      const {data} = await Axios.post(
        `/api/orgs/${orgId}/projects/create`,
        project
      )
      dispatch(createProject(data))
    } catch (error) {
      console.log('postProject thunk')
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
      return action.projects
    case CREATE_PROJECT:
      return [...state, action.project]
    default:
      return state
  }
}
