import axios from 'axios'

//action type
const GET_SINGLE_ORG = 'GET_SINGLE_ORG'

//action creator
const getSingleOrg = (org) => {
  return {
    type: GET_SINGLE_ORG,
    org,
  }
}

//thunk
export const fetchSingleOrg = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/orgs/${id}`)
      dispatch(getSingleOrg(data))
    } catch (err) {
      console.log('fetch single org thunk\n', err)
    }
  }
}

//initial state
const initialState = {}

//reducer
export default function singleOrgReducer(state = initialState, action) {
  switch (action.type) {
  case GET_SINGLE_ORG:
    return action.org
  default:
    return state
  }
}
