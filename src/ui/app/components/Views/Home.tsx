import React from 'react'
import { connect } from 'react-redux'
import { withStyles, WithStyles, StyleRulesCallback } from '../Common'
import { Link } from 'react-router-dom'
import { Flexbox, Parallax } from '../Layout'
import { Button } from '../Controls'
import { signOut } from '../../store/actions/security.actions'

const Home: React.SFC<MergedProps> = ({ classes }) => (
  <Flexbox flexDirection='column' flex='1'>
    <Flexbox
      justifyContent='space-between'
      alignItems='center'
      className={classes.header}
    >
      <span>Blueprint</span>
      <Link to='/login'>
        <Button>Start Exploring</Button>
      </Link>
    </Flexbox>
    <Flexbox
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      className={classes.masthead}
    >
      <div className={classes.mastheadTitle}>blueprint</div>
      <div className={classes.mastheadLogo}>
        <img src='../../img/helix-logo.png' alt='logo' />
      </div>
      <Parallax
        className={classes.mastheadHelix}
        rateDivisor={3}
        component={<img src='../../img/backbone.png' alt='dna-helix' />}
      />
      <Parallax
        className={classes.mastheadSketch}
        rateDivisor={3}
        component={<img src='../../img/helix-sketch.png' alt='dna-helix-sketch' />}
      />
    </Flexbox>
  </Flexbox>
)

const mapDispatchToProps = dispatch => ({
  logoutAction: () => dispatch(signOut()),
})

type ClassKeys = 'header' | 'masthead' | 'mastheadTitle' | 'mastheadLogo' | 'mastheadHelix' | 'mastheadSketch'
const styles: StyleRulesCallback<ClassKeys> = ({
  spacing,
  colors,
  dimensions,
  typography,
  mixins: { px, percent, combine, pxToRem },
}) => ({
  header: {
    height: dimensions.topBarHeight,
    padding: combine(px(0), px(spacing.unit * 3)),
    color: colors.coral[100],
    fontFamily: typography.headline.fontFamily,
    fontSize: pxToRem(18),
  },
  masthead: {
    backgroundColor: colors.blue[100],
    color: 'white',
    height: px(570),
  },
  mastheadTitle: {
    fontSize: pxToRem(48),
    fontFamily: typography.headline.fontFamily,
  },
  mastheadLogo: {
    margin: combine(px(10), px(10), px(8), px(10)),
    opacity: 0.9,
    '& img': {
      width: px(100),
      height: 'auto',
    },
  },
  mastheadHelix: {
    position: 'absolute',
    top: 0,
    left: 30,
    width: px(160),
    opacity: 0.4,
    '& img': {
      width: percent(100),
      height: 'auto',
    },
  },
  mastheadSketch: {
    position: 'absolute',
    top: 0,
    right: 30,
    width: px(160),
    opacity: 0.4,
    '& img': {
      width: percent(100),
      height: 'auto',
    },
  },
})

export default connect<{}, DispatchProps>(null, mapDispatchToProps)(
  withStyles(styles)(Home)
)

interface OwnProps { }

interface DispatchProps {
  logoutAction: () => void
}

type MergedProps = OwnProps & DispatchProps & WithStyles<ClassKeys>