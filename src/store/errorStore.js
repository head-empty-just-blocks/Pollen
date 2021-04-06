const SET_ERROR = 'SET_ERROR'
const CLEAR_ERROR = 'CLEAR_ERROR'

export const setError = (status, message) => {
  return {
    type: SET_ERROR,
    payload: {
      error: true,
      message,
      status,
    },
  }
}

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  }
}

const initialState = {error: false, message: '', status: ''}

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return action.payload
    case CLEAR_ERROR:
      return initialState
    default:
      return state
  }
}
