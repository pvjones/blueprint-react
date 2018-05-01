import React from 'react'
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from 'material-ui/TextField'
import { Omit } from '../../tsHelpers'

class TextField extends React.PureComponent<TextFieldProps> {
  render() {
    const {
      helperText,
      hideHelperText,
      label,
      margin = 'normal',
      placeholder,
      ...other,
    } = this.props

    return (
      <MuiTextField
        error={!!helperText}
        helperText={hideHelperText ? false : helperText || ' '}
        placeholder={placeholder}
        label={label}
        margin={margin}
        {...other}
      />
    )
  }
}

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'id'> {
  /** If true, FormHelperText component will not be rendered. */
  hideHelperText?: boolean
}

export default TextField
