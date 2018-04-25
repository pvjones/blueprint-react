import React from 'react'
import { Button as MuiButton } from 'material-ui'

const Button = ({ ...other }) => (
  <MuiButton
    {...other}
  />
)

export default Button
