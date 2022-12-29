import * as types from '../articles/types'
import { STATUSES } from '../../constants'

const initialState = {
  articles: [],
  request: STATUSES.IDLE,
  error: null,
  loading: false
}

export const articlesReduser2 = (state = initialState, action) => {
  const {type, payload } = action
  switch (type) {
    case types.GET_ARTICLES_REQUEST:
      return {
        ...state,
        request: STATUSES.REQUEST,
        loading: true
      };
    case types.GET_ARTICLES_FAILURE:
      return {
        ...state,
        request: STATUSES.FAILURE,
        error: payload
      };
    case types.GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: payload,
        request: STATUSES.SUCCESS,
        loading: false
      };
      default:
        return state
  }
}

