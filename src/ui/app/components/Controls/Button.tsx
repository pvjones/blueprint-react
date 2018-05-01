import React from 'react'
import { withStyles, WithStyles, StyleRulesCallback } from '../Common'
import { Button as MuiButton } from 'material-ui'
import { ButtonProps as MuiButtonProps } from 'material-ui/Button'

const Button: React.SFC<MergedProps> = ({ classes, colorKey = 'coral', ...other }) => (
  <MuiButton
    {...other}
    classes={{ root: classes[colorKey] }}
  />
)

type ClassKeys = 'coral' | 'white'
const styles: StyleRulesCallback<ClassKeys> = ({ colors, mixins: { border, pxToRem, px, hexToRgbA } }) => {

  return ({
    coral: {
      fontSize: pxToRem(14),
      color: colors.coral[100],
      backgroundColor: 'none',
      border: border(1, true, colors.coral[100]),
      borderRadius: px(3),
      '&:hover': {
        backgroundColor: hexToRgbA(colors.coral[100], 0.1),
      },
    },
    white: {
      fontSize: pxToRem(14),
      color: 'white',
      backgroundColor: 'none',
      border: border(1, true, 'white'),
      borderRadius: px(3),
      '&:hover': {
        backgroundColor: hexToRgbA('#fff', 0.1),
      },
    },
  })
}

export default withStyles(styles)(Button)

export interface ButtonProps extends MuiButtonProps {
  colorKey?: 'white' | 'coral'
}

type MergedProps = ButtonProps & WithStyles<ClassKeys>