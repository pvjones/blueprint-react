import React from 'react'
import { Map } from 'immutable'
import { reduxForm } from 'redux-form/immutable'
import { FormTextField, Button } from '../../Controls'
import { Flexbox } from '../../Layout'
import { InjectedFormProps } from 'redux-form'

const LoginForm: React.SFC<InjectedFormProps> = ({ handleSubmit, }) => {

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
          // disabled={pristine || !valid}
          style={{ width: '100%' }}
        >
          Sign in
          </Button>
      </form>
    </Flexbox>
  )
}

const validate = (values: Map<string, any>) => {
  const requiredFields = ['email', 'password']
  return requiredFields.reduce((r, field) => {
    return {
      ...r,
      ...(!values.get(field) ? { [field]: 'Required' } : {})
    }
  }, {})
}

const LoginFormName = 'LoginForm'
export default reduxForm<any, any>({
  validate,
  form: LoginFormName,
})(LoginForm)

