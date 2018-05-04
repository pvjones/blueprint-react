import React from 'react'
import { reduxForm } from 'redux-form/immutable'
import { FormTextField, Button } from '../../Controls'
import { Flexbox } from '../../Layout'
import { InjectedFormProps, FormErrors } from 'redux-form'
import { UserLoginMap, UserLogin } from '../../../store/models'

const LoginForm: React.SFC<InjectedFormProps<UserLoginMap>> = ({ handleSubmit }) => {

  return (
    <Flexbox flexDirection='column' flex='1'>
      <form onSubmit={handleSubmit}>
        <FormTextField
          name='email'
          label='email address'
          showErrorOnSubmit
          textFieldProps={{ fullWidth: true }}
        />
        <FormTextField
          name='password'
          label='password'
          showErrorOnSubmit
          textFieldProps={{ type: 'password', fullWidth: true }}
        />
        <Button
          type='submit'
          style={{ width: '100%', marginTop: '8px' }}
        >
          Sign in
          </Button>
      </form>
    </Flexbox>
  )
}

const validate = (values: UserLoginMap): FormErrors<UserLogin> => {
  const requiredFields = ['email', 'password'] as (keyof UserLoginMap['get'])[]

  return requiredFields.reduce((r, field) => {
    return {
      ...r,
      ...(!values.get(field) ? { [field]: 'Required' } : {})
    }
  }, {})
}

const LoginFormName = 'LoginForm'
export default reduxForm<UserLoginMap | UserLogin, {}>({
  validate,
  form: LoginFormName,
})(LoginForm)

