import axios from 'axios'

//action type
const GET_SINGLE_ORG = 'GET_SINGLE_ORG'

const CREATE_SINGLE_ORG = 'CREATE_SINGLE_ORG'

//action creator
const getSingleOrg = (org) => {
  return {
    type: GET_SINGLE_ORG,
    org,
  }
}

const createSingleOrg = (org) => {
  return {
    type: CREATE_SINGLE_ORG,
    org,
  }
}

//thunk
export const fetchSingleOrg = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/orgs/${id}`)
      console.log('in thunk:', data)
      dispatch(getSingleOrg(data))
    } catch (err) {
      console.log('fetch single org thunk\n', err)
    }
  }
}

export const postNewOrg = (org) => {
  return async (dispatch) => {
    try {
      const geocodeObj = axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_TOKEN}`
      )
      console.log(geocodeObj)
      //need lat and long to add to db entry
      const {data} = await axios.post('/api/orgs', org)
      dispatch(createSingleOrg(data))
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
    case GET_SINGLE_ORG: {
      console.log('in reducer', action.org)
      return action.org
    }
    default:
      return state
  }
}
