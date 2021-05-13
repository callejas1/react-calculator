import axios from 'axios'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_ATTEMPT_REQUEST,
  USER_ATTEMPT_SUCCESS,
  USER_ATTEMPT_FAIL
} from '../constants/userConstants'
import { config } from '../utils/config'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT })
  // dispatch({ type: USER_DETAILS_RESET })

  document.location.href = '/login'
}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    )

    dispatch({
      type: USER_REGISTER_SUCCESS,
    })

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const attemptsTracker = (id, answers, numberOfAttempts) => async (dispatch) => {
  try {
    dispatch({
      type: USER_ATTEMPT_REQUEST,
    })

    const { data } = await axios.post(
      '/api/users/attempts',
      { id, answers, numberOfAttempts },
      config
    )

    dispatch({
      type: USER_ATTEMPT_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_ATTEMPT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}