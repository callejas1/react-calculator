import axios from 'axios'
import {
  CALCULATION_LIST_REQUEST,
  CALCULATION_LIST_SUCCESS,
  CALCULATION_LIST_FAIL,
  CALCULATION_DETAILS_REQUEST,
  CALCULATION_DETAILS_SUCCESS,
  CALCULATION_DETAILS_FAIL
} from '../constants/calculationConstants'

export const listCalculations = () => async (dispatch) => {
  try {
    dispatch({ type: CALCULATION_LIST_REQUEST })

    const { data } = await axios.get('/api/calculations/')

    dispatch({
      type: CALCULATION_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CALCULATION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listCalculationDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CALCULATION_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/calculations/${id}`)
    
    dispatch({
      type: CALCULATION_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CALCULATION_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
