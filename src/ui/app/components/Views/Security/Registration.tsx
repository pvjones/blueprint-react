import React from 'react'
import { connect } from 'react-redux'
import { Flexbox, Paper } from '../../Layout'
import { withStyles, WithStyles, StyleRulesCallback } from '../../Common'
import { signIn } from '../../../store/actions/security.actions'
import RegistrationForm from './Registration.form'

class Registration extends React.PureComponent<MergedProps, State> {
  constructor(props) {
    super(props)
    this.state = { errorMessage: '' }
  }

  render() {
    const { classes } = this.props
    const { errorMessage } = this.state

    return (
      <Flexbox
        flex='1'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        className={classes.main}
      >
        <Flexbox
          flex='5'
          flexDirection='column'
          alignItems='center'
          justifyContent='flex-start'
          className={classes.masthead}
        >
          <div className={classes.logo}>
            <img src='../../img/helix-logo.png' alt='logo' />
          </div>
          <span className={classes.headline}>Create an account</span>
        </Flexbox>
        <Paper
          flexDirection='column'
          alignItems='center'
          className={classes.registration}
        >
          {errorMessage && <span className={classes.error}>{errorMessage}</span>}
          <RegistrationForm onSubmit={this.handleSubmit} />
        </Paper>
        <Flexbox flex='4' />
      </Flexbox>
    )
  }

  private handleSubmit = values => {
    const { registerAction } = this.props
    registerAction(values)
      .catch(error => this.handleError(error))
  }

  private handleError = error => {
    this.setState({ errorMessage: error.message })
  }

}

const mapDispatchToProps = dispatch => ({
  registerAction: (values) => dispatch(signIn(values)),
})

type ClassKeys = 'main' | 'registration' | 'logo' | 'masthead' | 'headline' | 'error'
const styles: StyleRulesCallback<ClassKeys> = ({
  typography,
  colors,
  spacing,
  mixins: { percent, px, combine, pxToRem },
}) => ({
  main: {
    height: percent(100),
    background: colors.blue[100],
  },
  registration: {
    position: 'relative',
    width: px(320),
    padding: combine(px(spacing.unit * 3), px(spacing.unit * 3), px(spacing.unit * 5), px(spacing.unit * 3)),
  },

  logo: {
    margin: combine(px(10), px(10), px(8), px(10)),
    opacity: 0.9,
    '& img': {
      width: px(100),
      height: 'auto',
    },
  },
  masthead: {
    paddingTop: px(spacing.unit * 3),
    minHeight: px(spacing.unit * 25),
  },
  headline: {
    fontFamily: typography.headline.fontFamily,
    fontSize: pxToRem(24),
    fontWieght: typography.headline.fontWeight,
    color: colors.common.white,
  },
  error: {
    position: 'absolute',
    top: spacing.unit * 2,
    color: colors.common.error,
  },
})

export default connect<{}, DispatchProps>(
  null,
  mapDispatchToProps,
)(withStyles(styles)(Registration))

export interface RegistrationProps { }

interface State {
  errorMessage: string
}
interface DispatchProps {
  registerAction: (values: any) => Promise<void>
}

type MergedProps = RegistrationProps & DispatchProps & WithStyles<ClassKeys>