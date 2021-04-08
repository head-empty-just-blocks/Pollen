import Axios from 'axios'
import history from '../history'
import {setError, clearError} from './errorStore'

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

export const donateToProject = (projectId, donation) => {
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
      dispatch(getAllProjects(data))
    } catch (error) {
      console.error(error)
    }
  }
}
export const postProject = (orgId, project) => {
  return async (dispatch) => {
    try {
      dispatch(clearError())
      const {data} = await Axios.post(`/api/orgs/${orgId}/projects`, project)
      dispatch(createProject(data))
      history.push('/account')
    } catch (error) {
      dispatch(setError(error.response.status, error.response.data))
      console.log('project creation error')
      console.error(error)
    }
  }
}

export const donateThunk = (orgId, projectId, donation) => {
  return async (dispatch) => {
    try {
      console.log('inside donate for project thunk')
      await Axios.put(`/api/orgs/${orgId}/projects/${projectId}/donate`, {
        donation,
      })
      dispatch(donateToProject(projectId, donation))
    } catch (error) {
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
    case DONATE_TO_PROJECT: {
      console.log(state)
      const updatedState = state.map((project) => {
        if (project.id === action.projectId) {
          project.currentAmount = +project.currentAmount + +action.donation
        }
        return project
      })
      console.log(updatedState)
      return updatedState
    }
    default:
      return state
  }
}
