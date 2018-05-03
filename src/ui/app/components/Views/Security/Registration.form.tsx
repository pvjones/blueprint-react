import React from 'react'
// import { Map } from 'immutable'
import { reduxForm } from 'redux-form/immutable'
import { FormTextField, Button } from '../../Controls'
import { Flexbox } from '../../Layout'
import { InjectedFormProps } from 'redux-form'

const RegistrationForm: React.SFC<InjectedFormProps> = ({
  handleSubmit,
  pristine,
  valid,
}) => (
    <Flexbox flexDirection='column' flex='1'>
      <form onSubmit={handleSubmit}>
        <FormTextField
          name='email'
          label='Email address'
          textFieldProps={{ fullWidth: true }}
        />
        <FormTextField
          name='firstName'
          label='First name'
          textFieldProps={{ fullWidth: true }}
        />
        <FormTextField
          name='lastName'
          label='Last name'
          textFieldProps={{ fullWidth: true }}
        />
        <FormTextField
          name='password'
          label='Password'
          textFieldProps={{ type: 'password', fullWidth: true }}
        />
        <FormTextField
          name='confirmPassword'
          label='Confirm password'
          textFieldProps={{ type: 'password', fullWidth: true }}
        />
        <Button
          type='submit'
          disabled={pristine || !valid}
          style={{ width: '100%', marginTop: '8px' }}
        >
          Create Account
        </Button>
      </form>
    </Flexbox>
  )

const validate = (values: Map<string, any>) => {
  const requiredFields = ['email', 'password', 'confirmPassword']

  return requiredFields.reduce((r, field) => {
    return {
      ...r,
      ...(!values.get(field) ? { [field]: 'Required' } : {})
    }
  }, {})
}

const RegistrationFormName = 'RegistrationForm'
export default reduxForm<any, any>({
  validate,
  form: RegistrationFormName,
})(RegistrationForm)

