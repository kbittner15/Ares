import initialState from './initialState'
import {
  SET_CURRENT_USER
} from './types'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER: {
      return { ...state, currentUser: payload }
    }
    default: {
      return state
    }
  }
}