// useEffect => perform side effects in your components
// import { useEffect } from 'react'
// import { getRedirectResult } from 'firebase/auth'

import SignUp from '../../components/sign-up-form/sign-up-form.component'
import SignIn from '../../components/sign-in-form/sign-in-form.component'

import { AuthenticationContainer } from './authentication.styles'

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
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </AuthenticationContainer>
  )
}

export default Authentication
