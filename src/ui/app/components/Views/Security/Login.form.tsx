import React from 'react'
import { reduxForm } from 'redux-form/immutable'
import { FormTextField, Button } from '../../Controls'
import { Flexbox } from '../../Layout'

const LoginForm: React.SFC<any> = () => {
  return (
    <form>
      <Flexbox flexDirection='column'>
        <FormTextField
          name='email'
          label='email address'
        />
        <FormTextField
          name='password'
          label='password'
          textFieldProps={{ type: 'password' }}
        />
        <Button>Sign in</Button>
      </Flexbox>
    </form>
  )
}

const LoginFormName = 'loginForm'
export default reduxForm<any, any>({
  form: LoginFormName,
})(LoginForm)