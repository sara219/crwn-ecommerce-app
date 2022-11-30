// useState => allows you to have state variables in functional components
import { useState } from 'react'
import './sign-in-form.styles.scss'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

// import methods form firebase.utils
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
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


  const handelSubmit = async (event) => {
    event.preventDefault()
    try {
    } catch (error) {}
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

        <Button>Sign In</Button>
      </form>
    </div>
  )
}

export default SignIn
