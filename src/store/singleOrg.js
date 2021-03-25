import axios from 'axios'
import '../../secrets'

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
      console.log(org)
      const geocodeObj = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${org.address}.json?access_token=${process.env.MAPBOX_TOKEN}`
      )
      //object.data.features[0].geometry.coordinates=[latitude, longitude]
      const [
        longitude,
        latitude,
      ] = geocodeObj.data.features[0].geometry.coordinates
      console.log(typeof latitude, typeof longitude)
      //need lat and long to add to db entry
      const {data} = await axios.post('/api/orgs', {
        ...org,
        latitude,
        longitude,
      })
      dispatch(createSingleOrg(data))
    } catch (err) {
      console.error(err)
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
