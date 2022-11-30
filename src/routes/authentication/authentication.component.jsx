// useEffect => perform side effects in your components
// import { useEffect } from 'react'
// import { getRedirectResult } from 'firebase/auth'
import {
  // auth,
  signInWithGooglePopup,
  createUserDocFromAuth,
  // signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils'

import SignUp from '../../components/sign-up-form/sign-up-form.component'
import SignIn from '../../components/sign-in-form copy/sign-in-form.component'

const Authentication = () => {
  // useEffect(() => {
  //   const getResult = async () => {
  //     const response = await getRedirectResult(auth)
  //     if (response) {
  //       const userDocRef = await createUserDocFromAuth(response.user)
  //       console.log(userDocRef)
  //     }
  //   }
  //   getResult()
  // }, [])


  return (
    <div>
      <h1>SignIn Page</h1>
      <SignIn />
      <SignUp />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  )
}

export default Authentication
