import React from 'react'
import { WithStyles, StyleRulesCallback, withStyles, classNames } from '../Common'

class Parallax extends React.PureComponent<MergedProps, State> {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.calcTranslation)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.calcTranslation)
  }

  render() {
    const {
      component,
      rateMultiplier,
      className,
      classes,
      top,
      bottom,
      right,
      left,
      ...other
    } = this.props

    const hasVal = (v: string | number | undefined): boolean => v === 0 || !!v

    const positions = {
      ...((hasVal(top) || hasVal(bottom)) ? (hasVal(top) ? { top } : { bottom }) : { top: 0 }),
      ...((hasVal(left) || hasVal(right)) ? (hasVal(left) ? { left } : { right }) : { left: 0 }),
    }

    return (
      <div
        ref={element => this.setElement(element)}
        className={classNames(classes.mainContainer, className)}
        style={positions}
        {...other}
      >
        {component}
      </div>
    )
  }

  private setElement = (el: HTMLDivElement | null): void => {
    this.setState({ el })
  }

  private calcTranslation = (): void => {
    const { rateMultiplier } = this.props
    const { el } = this.state
    const translateValue = window.scrollY * rateMultiplier

    if (el) {
      el.style.transform = `translate3d(0px, ${translateValue}px, 0px)`
    }
  }
}

type ClassKeys = 'mainContainer'
const styles: StyleRulesCallback<ClassKeys> = ({ }) => ({
  mainContainer: {
    position: 'absolute'
  },
})

export default withStyles(styles)(Parallax)

export interface ParallaxProps {
  className?: string
  rateMultiplier: number
  component: React.ReactNode
  top?: number | string
  bottom?: number | string
  right?: number | string
  left?: number | string
}
type MergedProps = ParallaxProps & WithStyles<ClassKeys>

interface State {
  el: HTMLElement | null
}