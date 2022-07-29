import * as actionTypes from './actionTypes'

export const updateTotalAmount = totalAmount => {
  return {
    type: actionTypes.UPDATE_TOTAL_AMOUNT,
    totalAmount,
  }
}