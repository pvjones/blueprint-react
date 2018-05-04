import React from 'react'
import {
  WrappedFieldProps,
  BaseFieldProps,
} from 'redux-form'
import { Field } from 'redux-form/immutable'
import ReCaptcha from 'react-google-recaptcha'
import getConfig from '../../../../../libs/config'

const renderCaptcha: React.SFC<WrappedFieldProps> = ({
  input: { onChange },
  ...other,
}) => {
  const sitekey = getConfig().ui.reCaptcha.siteKey

  const verify = response => {
    console.log('response')
    onChange(response)
  }

  return (
    <ReCaptcha
      sitekey={sitekey}
      onChange={verify}
      {...other}
    />
  )
}

const FormCaptchaField: React.SFC<BaseFieldProps> = ({ name, ...other }) => (
  <Field
    name={name}
    component={renderCaptcha}
    {...other}
  />
)

export default FormCaptchaField