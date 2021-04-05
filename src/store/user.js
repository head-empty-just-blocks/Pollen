import axios from 'axios'
import history from '../history'

// Action Types
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const MAKE_FLOWER = 'MAKE_FLOWER'

const defaultUser = {}

// Action Creators
const getUser = (user) => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
export const makeFlower = (orgId) => ({type: MAKE_FLOWER, orgId})

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
      res = await axios.post('/auth/signup', {
        firstName,
        lastName,
        email,
        password,
      })
    } catch (err) {
      return console.error(err)
    }
  } else if (method === 'login') {
    const {email, password} = user
    try {
      res = await axios.post('/auth/login', {
        email,
        password,
      })
    } catch (err) {
      return console.error(err)
    }
  }

  try {
    dispatch(getUser(res.data))
    history.push('/account')
  } catch (err) {
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

// Reducer
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case MAKE_FLOWER:
      return {...state, isFlower: true, organizationId: action.orgId}
    default:
      return state
  }
}
