// useState => allows you to have state variables in functional components
import { useState } from 'react'

import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  console.log(formFields)

  const handelSubmit = async (event) => {
    event.preventDefault()
  }

  const handelChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          type='text'
          required
          name='displayName'
          value={displayName}
          onChange={handelChange}
        />

        <label>Email</label>
        <input
          type='email'
          required
          name='email'
          value={email}
          onChange={handelChange}
        />

        <label>Password</label>
        <input
          type='password'
          required
          name='password'
          value={password}
          onChange={handelChange}
        />

        <label>Confirm Password</label>
        <input
          type='password'
          required
          name='confirmPassword'
          value={confirmPassword}
          onChange={handelChange}
        />

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default SignUp
