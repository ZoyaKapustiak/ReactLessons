import { initialState, articlesReduser2 } from './reduser'
import * as types from '../articles/types'
import { STATUSES } from '../../constants'

describe('new reducer', () => {
  it('GET_ARTICLES_REQUEST', () => {
    const action = {
      type: types.GET_ARTICLES_REQUEST
    }
    expect(articlesReduser2(initialState, action)).toEqual({error: null, articles: [],request: STATUSES.REQUEST, loading: true})
  })

  it('GET_ARTICLES_SUCCESS', () => {
    const initialState = {
      articles: [],
      request: STATUSES.IDLE,
      error: null,
      loading: true
    }

    const action = {
      type: types.GET_ARTICLES_SUCCESS,
      payload: [1,2,3] 
    }
    expect(articlesReduser2(initialState, action))
    .toEqual({...initialState, articles: action.payload,request: STATUSES.SUCCESS, loading: false})
  })

  it('GET_ARTICLES_FAILURE', () => {
    const initialStateWithError = {
      articles: null,
      request: STATUSES.IDLE,
      error: null,
      loading: true
    }

    const action = {
      type: types.GET_ARTICLES_FAILURE,
      payload: 'error.message',
    }
    expect(articlesReduser2(initialStateWithError, action))
    .toEqual({...initialStateWithError, error: action.payload, request: STATUSES.FAILURE})
  })

  it('should return the initialState', () => {
    const action = {
      type: types.GET_ARTICLES,
    }
    expect(articlesReduser2({...initialState}, action))
    .toEqual({...initialState})
  })
})