import React from 'react'
import { withStyles, WithStyles, StyleRulesCallback } from '../../Common'
import { Flexbox } from '../../Layout'
import { Button } from '../../Controls'
import { Link } from '../../Routing'

const Header: React.SFC<MergedProps> = ({ classes }) => (
  <Flexbox
    flexDirection='row'
    justifyContent='space-between'
    alignItems='center'
    className={classes.main}
  >
    <span>Blueprint</span>
    <Link to='/login'>
      <Button>Start Exploring</Button>
    </Link>
  </Flexbox>
)

type ClassKeys = 'main'
const styles: StyleRulesCallback<ClassKeys> = ({
  dimensions,
  spacing,
  colors,
  typography,
  mixins: { combine, px, percent, pxToRem },
}) => ({
  main: {
    width: percent(100),
    height: dimensions.topBarHeight,
    padding: combine(px(0), px(spacing.unit * 3)),
    color: colors.coral[100],
    fontFamily: typography.headline.fontFamily,
    fontSize: pxToRem(18),
  },
})

export default withStyles(styles)(Header)

export interface HeaderProps { }

type MergedProps = HeaderProps & WithStyles<ClassKeys>