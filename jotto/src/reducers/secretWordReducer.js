import { actionTypes } from '../actions'

/**
 * secret word reducer
 *
 * @name default
 * @function
 * @param {string} state=null state - State before reducer.
 * @param {object} action action - Action sent to reducer.
 * @returns {string} - New state (secret word payload from action).
 */
export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload
    default:
      return state
  }
}
