import * as helpers from './helpers'
import dimensions from './dimensions'
import colors from './colors'
import typography from './typography'

export const fontSize = 14

export const getThemeConfig = () => ({
  dimensions,
  colors,
  typography,
  mixins: { ...helpers },
  overrides: {},
})
