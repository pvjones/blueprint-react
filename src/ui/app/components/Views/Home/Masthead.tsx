import React from 'react'
import { withStyles, WithStyles, StyleRulesCallback } from '../../Common'
import { Flexbox, Parallax } from '../../Layout'
import { Link } from '../../Routing'
import { Button } from '../../Controls'

const Masthead: React.SFC<MergedProps> = ({ classes }) => (
  <Flexbox
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
    className={classes.main}
  >
    <div className={classes.title}>blueprint</div>
    <div className={classes.logo}>
      <img src='../../img/helix-logo.png' alt='logo' />
    </div>
    <div className={classes.subtitle}>Explore your DNA</div>
    <div className={classes.subtitle}>In-depth, secure, and free</div>
    <Link to='/login'>
      <Button colorKey='white' className={classes.button}>Get started</Button>
    </Link>
    <Parallax
      className={classes.parallaxHelix}
      rateMultiplier={0.33}
      left={30}
      bottom={0}
      component={<img src='../../img/backbone.png' alt='dna-helix' />}
    />
    <Parallax
      className={classes.parallaxSketch}
      rateMultiplier={0.33}
      top={-50}
      right={30}
      component={<img src='../../img/helix-sketch.png' alt='dna-helix-sketch' />}
    />
  </Flexbox>
)

type ClassKeys = 'main' | 'title' | 'logo' | 'subtitle' | 'button' | 'parallaxHelix' | 'parallaxSketch'
const styles: StyleRulesCallback<ClassKeys> = ({
  colors,
  typography,
  spacing,
  mixins: { px, pxToRem, combine, percent },
}) => ({
  main: {
    backgroundColor: colors.blue[100],
    color: 'white',
    height: px(570),
    position: 'relative',
  },
  title: {
    fontSize: pxToRem(48),
    fontFamily: typography.headline.fontFamily,
  },
  logo: {
    margin: combine(px(10), px(10), px(8), px(10)),
    opacity: 0.9,
    '& img': {
      width: px(100),
      height: 'auto',
    },
  },
  subtitle: {
    fontSize: pxToRem(18),
    fontFamily: typography.headline.fontFamily,
    marginBottom: spacing.unit,
  },
  button: {
    marginTop: spacing.unit,
  },
  parallaxHelix: {
    width: px(120),
    opacity: 0.3,
    '& img': {
      width: percent(100),
      height: 'auto',
    },
  },
  parallaxSketch: {
    width: px(160),
    opacity: 0.4,
    '& img': {
      width: percent(100),
      height: 'auto',
    },
  }
})

export default withStyles(styles)(Masthead)

export interface OwnProps { }
type MergedProps = OwnProps & WithStyles<ClassKeys>