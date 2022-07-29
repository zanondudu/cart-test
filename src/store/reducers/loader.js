import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const INITIAL_STATE = {
  isLoading: true,
  message: 'Estamos levando você ao carrinho',
}

const enableLoader = (state = INITIAL_STATE, action) => {
  return updateObject(state, { isLoading: true, message: action.message })
}

const disableLoader = (state = INITIAL_STATE) => {
  return updateObject(state, { isLoading: false })
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ENABLE_LOADER:
      return enableLoader(state, action)
    case actionTypes.DISABLE_LOADER:
      return disableLoader(state)
    default:
      return state
  }
}

export default reducer
