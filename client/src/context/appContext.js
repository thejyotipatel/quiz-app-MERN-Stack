import React, { useContext, useReducer } from 'react'
import axios from 'axios'
import reducer from './reducer'
import {
  CLEAR_VALUES,
  HANDLE_CHANGE,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  SET_QUESTION,
} from './action'
// get user from local storage
const user = localStorage.getItem('user')
const token = localStorage.getItem('token')
const userLocation = localStorage.getItem('location')

export const initalState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  token: token,
  user: user ? JSON.parse(user) : null,
  questionTypeOptions: ['MCQ', 'Plane Text'],
  questionType: 'MCQ',
  point: 0,
  Questions: [],
  totalQuestions: 0,
  Question: '',
  options1: '',
  options2: '',
  options3: '',
  // numOfPages: 1,
  // page: 1,
  // stats: {},
  // monthlyApplications: [],
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'right-questions', 'wrong-questions'],
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState)

  const authFetch = axios.create({
    baseURL: '/api/v1',
  })
  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
  }
  const registerUser = async (currentUser) => {
    try {
      const response = await axios.post('/auth/register', currentUser)
      // const { user, token } = response.data
      console.log(response)
      // dispatch({
      //   type: REGISTER_USER_SUCCESS,
      //   payload: { user, token },
      // })
    } catch (error) {
      // dispatch({
      //   type: REGISTER_USER_ERROR,
      //   payload: { msg: error.response.data.msg },
      // })
      console.log('error---', error)
    }
  }

  const loginUser = async (currentUser) => {
    // dispatch({ type: LOGIN_USER_BEGIN })

    try {
      const response = await axios.post('/auth/login', currentUser)

      console.log(response)
      // const { user, token, location } = response.data
      // dispatch({
      //   type: LOGIN_USER_SUCCESS,
      //   payload: { user, token, location },
      // })
      // local storage
      // addUserToLocalStorage({ user, token, location })
    } catch (error) {
      // if (error.response.status !== 401) {
      //   dispatch({
      //     type: LOGIN_USER_ERROR,
      //     payload: { msg: error.response.data.msg },
      //   })
      // }
      console.log('error---', error)
    }
    // clearAlert()
  }

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES })
  }

  const createQuiz = async () => {
    // dispatch({ type: CREATE_JOB_BEGIN })
    try {
      const { Question, questionType, options1, options2, options3, point } =
        state
      await authFetch.post('/quizs', {
        Question,
        questionType,
        options1,
        options2,
        options3,
        point,
      })
      // dispatch({ type: CREATE_JOB_SUCCESS })
      dispatch({ type: CLEAR_VALUES })
      console.log('quiz created')
    } catch (error) {
      if (error.response.status === 401) return

      // dispatch({
      //   type: CREATE_JOB_ERROR,
      //   payload: { msg: error.response.data.msg },
      // })
    }
    // clearAlert()
  }
  const getQuizs = async () => {
    const { search, searchStatus, searchType, sort } = state

    let url = `/quizs?status=${searchStatus}&searchType=${searchType}&sort=${sort}`

    if (search) {
      url = url + `&search=${search}`
    }

    // dispatch({ type: GET_JOBS_BEGIN })
    try {
      const { data } = await authFetch(url)
      // dispatch({
      //   type: GET_JOBS_SUCCESS,
      //   payload: {
      //     jobs,
      //     totalJobs,
      //     numOfPages,
      //   },
      // })
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    // clearAlert()
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        handleChange,
        registerUser,
        loginUser,
        clearValues,
        createQuiz,
        getQuizs,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
