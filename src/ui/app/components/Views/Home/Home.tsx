import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../../store/actions/security.actions'
import { withStyles, WithStyles, StyleRulesCallback } from '../../Common'
import { Flexbox, Paper } from '../../Layout'
import { Grid } from 'material-ui'
import { CheckCircle } from 'material-ui-icons'
import Header from './Header'
import Masthead from './Masthead'
import InfoBox from './InfoBox'

const Home: React.SFC<MergedProps> = ({ classes }) => (
  <Flexbox flexDirection='column' flex='1'>
    <Header />
    <Masthead />
    <InfoBox>
      <span className={classes.headline}>What <span className={classes.colorPop}>you'll learn</span></span>
      <span className={classes.infoText}>Get informed with tools to help you understand your biology and explore your personal genome.</span>
      <span className={classes.infoText}>Your DNA will be evaluated with a curated collection of genetic tests. After uploading your results from a supported DNA sequencing vendor, you'll be able to explore your results and find detailed descriptions, categories, and filters. It's fast, secure, free, and anonymous.</span>
    </InfoBox>
    <InfoBox className={classes.blueInfoBox}>
      <span className={classes.headline}>Your Blueprint</span>
      <span className={classes.infoText}>Your DNA contains many thousands of variations (also called SNPs or variants) that are unique to you. Most variants have no known or established effect. However, some are correlated with specific physical traits, or in some cases disease. These variants can be passed down from parent to child.</span>
      <span className={classes.infoText}>Genotyping tests from companies like 23andMe or AncestryDNA look at specific locations in your DNA and identify variants. These variants, combined with environmental factors, are make you unique.</span>
      <span className={classes.infoText}>We focus on certain variants known to be associated with important health conditions and traits. Tests like these are the first step towards understanding how your genetics can impact your life.</span>
    </InfoBox>
    <InfoBox>
      <span className={classes.headline}><span className={classes.colorPop}>Results</span> that matter</span>
      <Grid container spacing={40}>
        <Grid item lg={4} md={6} sm={12}>
          <Paper flex='1' flexDirection='column' justifyContent='center' alignItems='center' className={classes.infoCard}>
            <CheckCircle style={{ height: 48, width: 48 }} />
            <span className={classes.headline}>High Confidence</span>
            <span className={classes.infoText}>Our algorithms identify only the most relevant and reputable tests from crowd-sourced lists.</span>
          </Paper>
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <Paper flex='1'>
            <span>1</span>
          </Paper>
        </Grid >
        <Grid item lg={4} md={6} sm={12}>
          <Paper flex='1'>
            <span>1</span>
          </Paper>
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <Paper flex='1'>
            <span>1</span>
          </Paper>
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <Paper flex='1'>
            <span>1</span>
          </Paper>
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <Paper flex='1'>
            <span>1</span>
          </Paper>
        </Grid>
      </Grid>
    </InfoBox>
  </Flexbox>
)

const mapDispatchToProps = dispatch => ({
  logoutAction: () => dispatch(signOut()),
})

type ClassKeys = 'blueInfoBox' | 'infoText' | 'headline' | 'colorPop' | 'infoCard'
const styles: StyleRulesCallback<ClassKeys> = ({
  spacing,
  colors,
  mixins: { pxToRem },
}) => ({
  blueInfoBox: {
    backgroundColor: colors.blue[100],
    color: 'white',
  },
  infoText: {
    fontSize: pxToRem(18),
    lineHeight: pxToRem(28),
    fontWeight: 300,
    textAlign: 'justify',
    paddingBottom: spacing.unit * 2,
  },
  headline: {
    fontSize: pxToRem(28),
    textTransform: 'uppercase',
    fontWeight: 300,
    padding: spacing.unit * 2,
  },
  colorPop: {
    color: colors.coral[100],
  },
  infoCard: {
    padding: spacing.unit * 3,
    '& svg': {
      color: colors.coral[100],
    },
    '& $headline': {
      fontSize: pxToRem(22),
      textAlign: 'center'
    },
    '& $infoText': {
      fontSize: pxToRem(16),
      lineHeight: pxToRem(22),
    },
  },
})

export default connect<{}, DispatchProps>(null, mapDispatchToProps)(
  withStyles(styles)(Home)
)

interface HomeProps { }

interface DispatchProps {
  logoutAction: () => void
}

type MergedProps = HomeProps & DispatchProps & WithStyles<ClassKeys>