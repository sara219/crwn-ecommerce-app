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
    await createUserDocFromAuth(user)
  }

  const handelSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await signIneAuthUserWithEmailAndPassword(
        email,
        password
      )
      console.log(response);
    } catch (error) {
      console.log(error, 'no account');
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
      <form>
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
          <Button type='submit'>Sign In</Button>
          <Button buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
