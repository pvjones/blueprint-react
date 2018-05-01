import React from 'react'
import { Field } from 'redux-form/immutable'
import TextField, { TextFieldProps } from '../TextField'
import {
  WrappedFieldProps,
  BaseFieldProps,
} from 'redux-form'

const renderTextField: React.SFC<TextFieldProps & WrappedFieldProps> = ({
  input: { value, onChange, onBlur },
  meta: { touched, error },
  type = 'text',
  ...rest,
}) => (
    <TextField
      type={type}
      onBlur={onBlur}
      helperText={touched && error}
      onChange={e => onChange(e.target.value)}
      value={value}
      {...rest}
    />
  )

const FormTextField: React.SFC<BaseFieldProps<TextFieldProps> & FormTextFieldProps> = ({
  name,
  textFieldProps,
  ...rest,
}) => {
  return (
    <Field
      name={name}
      // todo: figure out @types/redux-form typings
      component={renderTextField as any}
      props={textFieldProps}
      {...rest}
    />
  )
}

export interface FormTextFieldProps {
  textFieldProps?: TextFieldProps
}

export default FormTextField
