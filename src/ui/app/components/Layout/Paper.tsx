import React from 'react'
import { default as MuiPaper, PaperProps as MuiPaperProps } from 'material-ui/Paper'
import { Flexbox, FlexboxProps } from '../Layout'
import { withStyles, WithStyles, StyleRulesCallback } from '../Common'
import { Omit } from '../../tsHelpers'

const Paper: React.SFC<PaperProps & WithStyles<ClassKeys>> = ({ children, classes, ...other }) => (
  <MuiPaper
    elevation={1}
    component={Flexbox}
    classes={{ root: classes.main }}
    {...other}
  >
    {children}
  </MuiPaper>
)

type ClassKeys = 'main'
const styles: StyleRulesCallback<ClassKeys> = ({ spacing, mixins: { px } }) => ({
  main: {
    padding: px(spacing.unit),
  },
})

export default withStyles(styles)(Paper)

export interface PaperProps extends Omit<MuiPaperProps, 'style'>, FlexboxProps { }