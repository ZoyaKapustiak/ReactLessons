import * as types from '../articles/types'
import { API } from '../../constants'

export const getArticles = () => ({
  type: types.GET_ARTICLES
})
export const getArticlesReqest = () => ({
  type: types.GET_ARTICLES_REQUEST,
})
export const getArticlesSuccsess = (data) => ({
  type: types.GET_ARTICLES_SUCCESS,
  payload: data,
})
export const getArticlesFailure = (err) => ({
  type: types.GET_ARTICLES_FAILURE,
  payload: err,
})

export const getAllArticles = () => async (dispatch) => {
  dispatch(getArticlesReqest());
  try {
    const res = await fetch(API);

    if(!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }
    const result = await res.json();
    dispatch(getArticlesSuccsess(result))
    dispatch(getArticlesFailure(null))
  } catch (err) {
    dispatch(getArticlesFailure(err.message));
  }
}

