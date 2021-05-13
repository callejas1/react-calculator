import { 
  CALCULATION_LIST_FAIL, 
  CALCULATION_LIST_REQUEST, 
  CALCULATION_LIST_SUCCESS,
  CALCULATION_DETAILS_REQUEST,
  CALCULATION_DETAILS_SUCCESS,
  CALCULATION_DETAILS_FAIL
} from '../constants/calculationConstants'

export const calculationListReducer = (state = { calculations: [] }, action) => {
  switch (action.type) {
    case CALCULATION_LIST_REQUEST:
      return { loading: true, calculations: [] }
    case CALCULATION_LIST_SUCCESS:
      return { loading: false, calculations: action.payload.calculations }
    case CALCULATION_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const calculationDetailsReducer = (
  state = { calculation: {} },
  action
) => {
  switch (action.type) {
    case CALCULATION_DETAILS_REQUEST:
      return { ...state, loading: true }
    case CALCULATION_DETAILS_SUCCESS:
      return { loading: false, calculation: action.payload }
    case CALCULATION_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
