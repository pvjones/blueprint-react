import React from 'react'
import { withStyles } from 'material-ui'
import { Link as RouterLink } from 'react-router-dom'

const Link = ({ classes, ...other }) => (
  <RouterLink {...other} />
)

const styles = () => ({
  main: {

  },
})

export default withStyles(styles)(Link)
