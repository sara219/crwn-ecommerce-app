// useEffect => perform side effects in your components
import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import {
  auth,
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  useEffect(() => {
    const getResult = async () => {
      const response = await getRedirectResult(auth)
      if (response) {
        const userDocRef = await createUserDocFromAuth(response.user)
        console.log(userDocRef)
      }
    }
    getResult()
  }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocFromAuth(user)
  }

  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </div>
  )
}

export default SignIn
