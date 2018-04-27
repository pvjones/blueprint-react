import React from 'react'

class Parallax extends React.PureComponent<ParallaxProps, State> {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.calcTranslation)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.calcTranslation)
  }

  setElement = el => {
    this.setState({ el })
  }

  calcTranslation = () => {
    const { rateDivisor } = this.props
    const { el } = this.state
    const translateValue = window.scrollY / rateDivisor

    if (el) {
      el.style.transform = `translate3d(0px, ${translateValue}px, 0px)`
    }
  }

  render() {
    const {
      component,
      rateDivisor,
      ...other
    } = this.props

    return (
      <div ref={element => this.setElement(element)} {...other}>
        {component}
      </div>
    )
  }

}

export default Parallax

export interface ParallaxProps {
  className?: string
  rateDivisor: number
  component: React.ReactNode
}

interface State {
  el: HTMLElement
}