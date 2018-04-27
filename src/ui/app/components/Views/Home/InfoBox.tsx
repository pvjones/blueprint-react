import React from 'react'
import classNames from 'classnames'
import { withStyles, WithStyles, StyleRulesCallback } from '../../Common'
import { Flexbox, FlexboxProps } from '../../Layout'

const InfoBox: React.SFC<MergedProps> = ({ children, classes, className, ...other }) => (
  <Flexbox
    flexDirection='row'
    alignItems='center'
    justifyContent='center'
    flex='1'
    className={classNames(classes.main, className)}
    {...other}
  >
    <Flexbox flex='1 1 auto' />
    <Flexbox flex='2 0 200px' flexDirection='column' alignItems='center' justifyContent='center'>
      {children}
    </Flexbox>
    <Flexbox flex='1 1 auto' />

  </Flexbox>
)

type ClassKeys = 'main'
const styles: StyleRulesCallback<ClassKeys> = ({ spacing, mixins: { combine, px } }) => ({
  main: {
    padding: combine(px(spacing.unit * 4), px(spacing.unit * 2)),
  },
})

export default withStyles(styles)(InfoBox)

export interface InfoBoxProps extends FlexboxProps { }

type MergedProps = InfoBoxProps & WithStyles<ClassKeys>
