import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Flexbox, Paper } from '../../Layout'
import { withStyles, WithStyles, StyleRulesCallback } from '../../Common'
import { signIn } from '../../../store/actions/security.actions'
import LoginForm from './Login.form'

class Login extends React.PureComponent<MergedProps, OwnState> {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = field => event => {
    this.setState({ [field]: event.target.value })
  }

  handleSubmit = e => {
    const { loginAction } = this.props
    const { email, password } = this.state
    loginAction(email, password)
    e.preventDefault()
  }

  render() {
    const { classes } = this.props
    return (
      <Flexbox
        flex='1'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        className={classes.main}
      >
        <Flexbox
          flex='1'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
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
          <LoginForm />
        </Paper>
        <Paper
          justifyContent='center'
          className={classes.register}
        >
          <span>
            New to Blueprint? <Link to='/register'>Create an account</Link>.
          </span>
        </Paper>
        <Flexbox flex='1' />
      </Flexbox>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loginAction: (email, password) => dispatch(signIn(email, password)),
})

type ClassKeys = 'main' | 'login' | 'register' | 'logo' | 'headline'
const styles: StyleRulesCallback<ClassKeys> = ({
  typography,
  colors,
  spacing,
  mixins: { percent, px, combine },
}) => ({
  main: {
    height: percent(100),
    background: colors.blue[100],
  },
  login: {
    width: px(300),
    paddingBottom: px(spacing.unit * 5),
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
  headline: {
    fontFamily: typography.headline.fontFamily,
    fontSize: typography.headline.fontSize,
    fontWieght: typography.headline.fontWeight,
    color: 'white',
  },
})

export default connect<{}, DispatchProps>(
  null,
  mapDispatchToProps,
)(withStyles(styles)(Login))

export interface LoginProps { }

interface OwnState {
  email: string
  password: string
}

interface DispatchProps {
  loginAction: (email: string, password: string) => void
}

type MergedProps = LoginProps & DispatchProps & WithStyles<ClassKeys>