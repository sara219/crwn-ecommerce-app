import { createContext, useEffect, useReducer } from 'react'
import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils'
// as the actual value the we wanna access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

const INITIAL_STATE = {
  currentUser: null,
}

export const USER_ACTION_TYPE = {
  SET_CURRENT_USER: 'SET_USER',
}

const userReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    default:
      throw new Error(`Unhandled type ${action.type} in userReducer!!`)
  }
}

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPE.SET_CURRENT_USER, payload: user })
  }

  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    // callback function ::: tied directly to the actual auth state changing.
    // * user state : authentication user or null
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user)
      }
      setCurrentUser(user)
    })

    //  return unsubscribe whenever the function unmount
    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
