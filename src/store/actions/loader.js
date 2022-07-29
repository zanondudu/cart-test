import * as actionTypes from './actionTypes'

export const enableLoader = message => {
  return {
    type: actionTypes.ENABLE_LOADER,
    message
  }
}

export const disableLoader = () => {
  return {
    type: actionTypes.DISABLE_LOADER
  }
}
