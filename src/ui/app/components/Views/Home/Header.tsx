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
      <Flexbox>
        <Flexbox
          ref={el => this.setElement(el)}
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          className={classes.main}
        >
          {this.renderContent()}
        </Flexbox>
        <Flexbox
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          className={classNames(classes.main, classes.scrollBar, { [classes.scrolling]: isScrolling })}>
          {this.renderContent()}
        </Flexbox>
      </Flexbox>
    )
  }

  private renderContent = () => (
    <React.Fragment>
      <span>Blueprint</span>
      <Link to='/login'>
        <Button>Start Exploring</Button>
      </Link>
    </React.Fragment>
  )

  private setElement = (el: HTMLElement): void => {
    this.setState({ el })
  }

  private setScrolling = (): void => {
    const scroll = window.scrollY
    scroll > 100 ? this.setState({ isScrolling: true }) : this.setState({ isScrolling: false })
  }
}

type ClassKeys = 'main' | 'scrolling' | 'scrollBar'
const styles: StyleRulesCallback<ClassKeys> = ({
  dimensions,
  spacing,
  colors,
  typography,
  mixins: { combine, px, percent, pxToRem, border, hexToRgbA },
}) => ({
  main: {
    width: percent(100),
    height: dimensions.topBarHeight,
    padding: combine(px(0), px(spacing.unit * 3)),
    color: colors.coral[100],
    fontFamily: typography.headline.fontFamily,
    fontSize: pxToRem(18),
  },
  scrollBar: {
    position: 'fixed',
    height: px(0),
    overflow: 'hidden',
    transition: 'height 0.2s ease'
  },
  scrolling: {
    height: dimensions.topBarHeight,
    zIndex: 1000,
    position: 'fixed',
    backgroundColor: 'white',
    borderBottom: border(1, true, hexToRgbA(colors.blue[100], 0.3)),
    opacity: 0.9,
  },
})

export default withStyles(styles)(Header)

export interface HeaderProps { }

interface State {
  el: HTMLElement | null
  isScrolling: boolean
}

type MergedProps = HeaderProps & WithStyles<ClassKeys>