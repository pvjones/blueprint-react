import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui'
import { Link } from 'react-router-dom'
import { Flexbox } from '../Layout'
import { Button } from '../Controls'
import { signOut } from '../../store/actions/security.actions'

const Home = ({ classes, logoutAction }) => (
  <Flexbox flexDirection='column' flex='1'>
    <Flexbox justifyContent='space-between' className={classes.header}>
      <span>Blueprint</span>
      <Button component={Link} to='/login'>
        Start Exploring
      </Button>
    </Flexbox>
  </Flexbox>
)

const mapDispatchToProps = dispatch => ({
  logoutAction: () => dispatch(signOut()),
})

const styles = () => ({
  header: {
    padding: '8px 48px',
    color: 
  },
})

export default connect(null, mapDispatchToProps)(
  withStyles(styles)(
    Home
  )
)
