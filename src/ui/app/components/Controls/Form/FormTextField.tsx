import React from 'react'
import { Field } from 'redux-form/immutable'
import TextField, { TextFieldProps } from '../TextField'
import {
  WrappedFieldProps,
  BaseFieldProps,
} from 'redux-form'

const renderTextField: React.SFC<TextFieldProps & AdditionalProps & WrappedFieldProps> = ({
  input: { value, onChange, onBlur },
  meta: { error, submitFailed, touched },
  type = 'text',
  showErrorOnSubmit = false,
  ...other,
}) => {
  const errorMessage = showErrorOnSubmit ? submitFailed && error : touched && error
  return (
    <TextField
      type={type}
      onBlur={onBlur}
      helperText={errorMessage}
      onChange={e => onChange(e.target.value)}
      value={value}
      {...other}
    />
  )
}

const FormTextField: React.SFC<BaseFieldProps<TextFieldProps> & FormTextFieldProps> = ({
  name,
  textFieldProps,
  ...other,
}) => {
  return (
    <Field
      name={name}
      // todo: figure out @types/redux-form typings
      component={renderTextField as any}
      props={textFieldProps}
      {...other}
    />
  )
}

interface AdditionalProps {
  showErrorOnSubmit?: boolean
}
export interface FormTextFieldProps extends AdditionalProps {
  textFieldProps?: TextFieldProps

}

export default FormTextField
