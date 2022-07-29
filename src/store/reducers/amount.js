import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const INITIAL_STATE = {
  totalAmount: 0,
}

const getTotalAmount = (state = INITIAL_STATE, action) => {
  return updateObject(state, { totalAmount: action.totalAmount })
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TOTAL_AMOUNT:
      return getTotalAmount(state, action)
    default:
      return state
  }
}

export default reducer
