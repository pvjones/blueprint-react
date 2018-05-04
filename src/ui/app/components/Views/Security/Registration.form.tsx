import React from 'react'
import { reduxForm } from 'redux-form/immutable'
import { FormTextField, FormCaptcha, Button } from '../../Controls'
import { Flexbox } from '../../Layout'
import { InjectedFormProps, FormErrors } from 'redux-form'
import { UserRegistrationMap, UserRegistration } from '../../../store/models'

const RegistrationForm: React.SFC<InjectedFormProps<UserRegistrationMap>> = ({
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
        <Flexbox justifyContent='center' marginBottom='16px'>
          <FormCaptcha name='captcha' />
        </Flexbox>
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

const validate = (values: UserRegistrationMap): FormErrors<UserRegistration> => {
  const requiredFields = ['email', 'password', 'confirmPassword', 'recaptcha'] as (keyof UserRegistrationMap['get'])[]

  return requiredFields.reduce((r, field) => {
    return {
      ...r,
      ...(!values.get(field) ? { [field]: 'Required' } : {})
    }
  }, {})
}

const RegistrationFormName = 'RegistrationForm'
export default reduxForm<UserRegistrationMap | UserRegistration, {}>({
  validate,
  form: RegistrationFormName,
})(RegistrationForm)

