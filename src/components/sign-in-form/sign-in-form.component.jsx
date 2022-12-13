// useState => allows you to have state variables in functional components
import { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

import { SignInForm, ButtonContainer } from './sign-in-form.styles'

// import methods form firebase.utils
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signIneAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
  }

  const handelSubmit = async (event) => {
    event.preventDefault()
    try {
      const { user } = await signIneAuthUserWithEmailAndPassword(
        email,
        password
      )
      // setCurrentUser(user)
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password')
          break
        case 'auth/user-not-found':
          alert('no user associated with this email')
          break
        default:
          console.log(error)
      }
    }
  }

  const handelChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <SignInForm>
      <h2>Already have an account?!</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handelSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          name='email'
          value={email}
          onChange={handelChange}
        />

        <FormInput
          label='Password'
          type='password'
          required
          name='password'
          value={password}
          onChange={handelChange}
        />

        <ButtonContainer>
          <Button type='submit' on>
            Sign In
          </Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonContainer>
      </form>
    </SignInForm>
  )
}

export default SignIn
