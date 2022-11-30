// useState => allows you to have state variables in functional components
import { useState } from 'react'
import './sign-up-form.styles.scss'
import FormInput from '../form-input/form-input.component'

// import methods form firebase.utils
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handelSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('password do not match!!')
      return
    }
    // call the firebase server
    try {
      // call the create email and pass method
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      // create the auth user doc inside firebase db
      await createUserDocFromAuth(user, { displayName })
      resetFormFields()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email Already In Use')
      } else {
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
      <h2>Don't have an account ?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handelSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          name='displayName'
          value={displayName}
          onChange={handelChange}
        />

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

        <FormInput
          label='Confirm Password'
          type='password'
          required
          name='confirmPassword'
          value={confirmPassword}
          onChange={handelChange}
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SignUp
