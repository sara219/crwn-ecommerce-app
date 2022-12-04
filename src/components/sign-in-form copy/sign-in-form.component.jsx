// useState => allows you to have state variables in functional components
import { useState } from 'react'
import './sign-in-form.styles.scss'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

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
    <div className='sign-up-container'>
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

        <div className='buttons-container'>
          <Button type='submit' on>
            Sign In
          </Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
