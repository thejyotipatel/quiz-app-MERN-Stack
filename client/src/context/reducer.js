import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  TOGGLE_SIDEBAR,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  SET_EDIT_JOB,
  DELETE_JOB_BEGIN,
  EDIT_JOB_BEGIN,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  CLEAR_FILTERS,
  CHANGE_PAGE,
  SET_QUESTION,
} from './action'
import { initalState } from './appContext'

const reducer = (state, action) => {
  if (action.type === SET_QUESTION) {
    return {
      ...state,

      // showAlert: true,
      Question: state.Question,
      alertText: 'Please provide all values!',
    }
  }

  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'not-sucess',
      alertText: 'Please provide all values!',
    }
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    }
  }

  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    }
  }

  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLoaction: action.payload.loaction,
      jobLoaction: action.payload.loaction,
      showAlert: true,
      alertType: 'sucess',
      alertText: 'User Created! Redirecting...',
    }
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'not-sucess',
      alertText: action.payload.msg,
    }
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLoaction: action.payload.loaction,
      jobLoaction: action.payload.loaction,
      showAlert: true,
      alertType: 'sucess',
      alertText: 'Login Successful! Redirecting...',
    }
  }

  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'not-sucess',
      alertText: action.payload.msg,
    }
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initalState,
      user: null,
      token: null,
      userLocation: '',
      jobLocation: '',
    }
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLoaction: action.payload.loaction,
      jobLoaction: action.payload.loaction,
      showAlert: true,
      alertType: 'sucess',
      alertText: 'User Profile Updated!',
    }
  }

  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'not-sucess',
      alertText: action.payload.msg,
    }
  }

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      page: 1,
      [action.payload.name]: action.payload.value,
    }
  }

  if (action.type === CLEAR_VALUES) {
    const initialState = {
      questionType: 'MCQ',
      Question: '',
      options1: '',
      options2: '',
      options3: '',
      point: 0,
    }
    return {
      ...state,
      ...initialState,
    }
  }

  if (action.type === CREATE_JOB_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === CREATE_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'sucess',
      alertText: 'new job created!',
    }
  }

  if (action.type === CREATE_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'not-sucess',
      alertText: action.payload.msg,
    }
  }

  if (action.type === GET_JOBS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false }
  }

  if (action.type === GET_JOBS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      jobs: action.payload.jobs,
      totalJobs: action.payload.totalJobs,
      numOfPages: action.payload.numOfPages,
    }
  }

  if (action.type === SET_EDIT_JOB) {
    const job = state.jobs.find((job) => job._id === action.payload.id)
    const { _id, position, company, jobLoaction, jobType, status } = job
    return {
      ...state,
      isEditing: true,
      editJobId: _id,
      position,
      company,
      jobLoaction,
      jobType,
      status,
    }
  }

  if (action.type === DELETE_JOB_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === EDIT_JOB_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === EDIT_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'sucess',
      alertText: 'Job Updated!',
    }
  }

  if (action.type === EDIT_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'not-sucess',
      alertText: action.payload.msg,
    }
  }

  if (action.type === SHOW_STATS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false }
  }

  if (action.type === SHOW_STATS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      stats: action.payload.stats,
      monthlyApplications: action.payload.monthlyApplications,
    }
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      search: '',
      searchStatus: 'all',
      searchType: 'all',
      sort: 'latest',
    }
  }

  if (action.type === CHANGE_PAGE) {
    return { ...state, page: action.payload.page }
  }

  throw new Error(`no such action type: ${action.type}`)
}

export default reducer
