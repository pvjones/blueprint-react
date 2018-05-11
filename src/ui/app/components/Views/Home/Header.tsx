import React from 'react'
import { withStyles, WithStyles, StyleRulesCallback, classNames } from '../../Common'
import { Flexbox } from '../../Layout'
import { Button } from '../../Controls'
import { Link } from '../../Routing'

class Header extends React.PureComponent<MergedProps, State> {
  constructor(props) {
    super(props)
    this.state = {
      el: null,
      isScrolling: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setScrolling)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setScrolling)
  }

  render() {
    const { classes } = this.props
    const { isScrolling } = this.state

    return (
      <Flexbox
        ref={el => this.setElement(el)}
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        className={classNames(classes.main, { [classes.scrolling]: isScrolling })}
      >
        <span>Blueprint</span>
        <Link to='/login'>
          <Button>Start Exploring</Button>
        </Link>
      </Flexbox>
    )
  }

  private setElement = (el: HTMLElement): void => {
    this.setState({ el })
  }

  private setScrolling = (): void => {
    const scroll = window.scrollY
    scroll > 100 ? this.setState({ isScrolling: true }) : this.setState({ isScrolling: false })
  }
}

type ClassKeys = 'main' | 'scrolling'
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
  scrolling: {
    zIndex: 1000,
    position: 'fixed',
    backgroundColor: 'white',
    opacity: 0.8,
  },
})

export default withStyles(styles)(Header)

export interface HeaderProps { }

interface State {
  el: HTMLElement | null
  isScrolling: boolean
}

type MergedProps = HeaderProps & WithStyles<ClassKeys>