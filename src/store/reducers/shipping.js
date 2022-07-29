import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const INITIAL_STATE = {
  freeShipping: false,
}

const enableFreeShipping = (state = INITIAL_STATE) => {
  return updateObject(state, { freeShipping: true })
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ENABLE_FREE_SHIPPING:
      return enableFreeShipping(state)
    default:
      return state
  }
}

export default reducer
