import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui'
import { Link } from 'react-router-dom'
import { Flexbox } from '../Layout'
import { Button } from '../Controls'
import { signOut } from '../../store/actions/security.actions'

const Home = ({ classes, logoutAction }) => (
  <Flexbox flexDirection='column' flex='1'>
    <Flexbox justifyContent='space-between' alignItems='center' className={classes.header}>
      <span>Blueprint</span>
      <Button component={Link} to='/login'>
        Start Exploring
      </Button>
    </Flexbox>
    <Flexbox flexDirection='column' className={classes.main}>
      <div>Home</div>
    </Flexbox>
  </Flexbox>
)

const mapDispatchToProps = dispatch => ({
  logoutAction: () => dispatch(signOut()),
})

const styles = ({ spacing, colors, dimensions, typography, mixins: { px, combine } }) => ({
  header: {
    height: dimensions.topBarHeight,
    padding: combine(px(0), px(spacing.unit * 3)),
    color: colors.blue[100],
    fontFamily: typography.headline.fontFamily,
  },
  main: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.body.fontSize,
  },
})

export default connect(null, mapDispatchToProps)(
  withStyles(styles)(
    Home
  )
)
