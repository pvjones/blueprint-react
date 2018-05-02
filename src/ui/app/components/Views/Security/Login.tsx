import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Flexbox, Paper } from '../../Layout'
import { withStyles, WithStyles, StyleRulesCallback } from '../../Common'
import { signIn } from '../../../store/actions/security.actions'
import LoginForm from './Login.form'

class Login extends React.PureComponent<MergedProps, State> {
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
          flex='3'
          flexDirection='column'
          alignItems='center'
          justifyContent='flex-start'
          className={classes.masthead}
        >
          <div className={classes.logo}>
            <img src='../../img/helix-logo.png' alt='logo' />
          </div>
          <span className={classes.headline}>Sign in to Blueprint</span>
        </Flexbox>
        <Paper
          flexDirection='column'
          alignItems='center'
          className={classes.login}
        >
          {errorMessage && <span className={classes.error}>{errorMessage}</span>}
          <LoginForm onSubmit={this.handleSubmit} />
        </Paper>
        <Paper
          justifyContent='center'
          className={classes.register}
        >
          <span>
            New to Blueprint? <Link to='/register'>Create an account</Link>.
          </span>
        </Paper>
        <Flexbox flex='4' />
      </Flexbox>
    )
  }

  private handleSubmit = values => {
    const { loginAction } = this.props
    loginAction(values).catch(error => this.handleError(error))
  }

  private handleError = error => {
    this.setState({ errorMessage: error.message })
  }

}

const mapDispatchToProps = dispatch => ({
  loginAction: (values) => dispatch(signIn(values)),
})

type ClassKeys = 'main' | 'login' | 'register' | 'logo' | 'masthead' | 'headline' | 'error'
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
  login: {
    position: 'relative',
    width: px(300),
    padding: combine(px(spacing.unit * 3), px(spacing.unit * 3), px(spacing.unit * 5), px(spacing.unit * 3)),
    minHeight: px(288),
  },
  register: {
    width: px(300),
    marginTop: px(spacing.unit * 2),
    padding: px(spacing.unit * 2),
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
)(withStyles(styles)(Login))

export interface LoginProps { }

interface State {
  errorMessage: string
}
interface DispatchProps {
  loginAction: (values: any) => Promise<void>
}

type MergedProps = LoginProps & DispatchProps & WithStyles<ClassKeys>