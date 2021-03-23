import Axios from 'axios'

// action type
const GET_ALL_ORGS = 'GET_ALL_ORGS'

// action creator
export const getAllOrgs = (orgs) => {
	return {
		type: GET_ALL_ORGS,
		orgs,
	}
}

// thunks
export const fetchOrgs = () => {
	return async (dispatch) => {
		try {
			const {data} = await Axios.get('/api/orgs')
			dispatch(getAllOrgs(data))
		} catch (error) {
			console.log('fetchOrgsThunk\n', error)
		}
	}
}

// initial state
const initialState = []

// reducer
export default function allOrgsReducer(state = initialState, action) {
	switch (action.type) {
	case GET_ALL_ORGS:
		return action.orgs
	default:
		return state
	}
}
