import axios from 'axios'
import history from '../history'
import {setError, clearError} from './errorStore'
import {donateToProject} from './allProjects'

// Action Types
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const MAKE_FLOWER = 'MAKE_FLOWER'
const DONATE_POLLEN = 'DONATE_POLLEN'

const defaultUser = {}

// Action Creators
const getUser = (user) => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
export const makeFlower = (orgId) => ({type: MAKE_FLOWER, orgId})
const donatePollen = (donation) => ({
  type: DONATE_POLLEN,
  donation,
})

// Thunks
export const me = () => async (dispatch) => {
  try {
    const {data} = await axios.get('/auth/me')
    dispatch(getUser(data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (user, method) => async (dispatch) => {
  let res
  if (method === 'signup') {
    const {firstName, lastName, email, password} = user
    try {
      dispatch(clearError())
      res = await axios.post('/auth/signup', {
        firstName,
        lastName,
        email,
        password,
      })
    } catch (err) {
      dispatch(setError(err.response.status, err.response.data))
      return console.error(err)
    }
  } else if (method === 'login') {
    const {email, password} = user
    try {
      dispatch(clearError())
      res = await axios.post('/auth/login', {
        email,
        password,
      })
    } catch (err) {
      dispatch(setError(err.response.status, err.response.data))
      return console.error(err)
    }
  }

  try {
    dispatch(clearError())
    dispatch(getUser(res.data))
    history.push('/account')
  } catch (err) {
    dispatch(setError(err.response.status, err.response.data))
    console.error(err)
  }
}

export const logout = () => async (dispatch) => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/')
  } catch (err) {
    console.error(err)
  }
}

export const donatePollenThunk = (userId, orgId, projectId, donation) => async (
  dispatch
) => {
  try {
    clearError()
    await axios.put(`/api/users/${userId}/donate`, {donation})
    console.log('after user\'s pollen decresases')
    await axios.put(`/api/orgs/${orgId}/projects/${projectId}/donate`, {
      donation,
    })
    dispatch(donatePollen(donation))
    dispatch(donateToProject(projectId, donation))
  } catch (error) {
    if (error.response) {
      console.log('error:', error.response)
      dispatch(setError(error.response.status, error.response.data))
    } else console.error(error)
  }
}

// Reducer
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case MAKE_FLOWER:
      return {...state, isFlower: true, organizationId: action.orgId}
    case DONATE_POLLEN:
      return {...state, pollen: state.pollen - action.donation}
    default:
      return state
  }
}
