import { createContext, useState, useEffect } from 'react'
import { onAuthStateChangedListener} from '../utils/firebase/firebase.utils'
// as the actual value the we wanna access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }


  useEffect(() => {
    // callback function
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user)
    })

    //  return unsubscribe whenever the function unmount
    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
