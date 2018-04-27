import * as helpers from './helpers'
import dimensions, { Dimensions } from './dimensions'
import colors, { Colors } from './colors'
import typography from './typography'
import { ThemeOptions, Theme } from 'material-ui/styles/createMuiTheme'
import { StyleRules } from 'material-ui/styles'
import { Omit } from '../tsHelpers'
import { Mixins } from 'material-ui/styles/createMixins'

export const fontSize = 14

export const getThemeConfig = (): AppThemeOptions => ({
  dimensions,
  colors,
  typography,
  mixins: { ...helpers },
  overrides: {},
})

export interface AppTheme extends Theme {
  mixins: MixinHelpers & Mixins
  dimensions: Dimensions
  colors: Colors
}

export interface AppThemeOptions extends Omit<ThemeOptions, 'mixins'> {
  mixins: Partial<MixinHelpers> & Partial<Mixins>
  dimensions: Dimensions
  overrides: { [name: string]: StyleRules }
  colors: Colors
}

type TimingFunc = 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'
export interface MixinHelpers {
  rem: (value: number) => string
  px: (value: number | string) => string
  pxToRem: (value: number | string) => string
  percent: (value: number) => string
  seconds: (value: number) => string
  scale: (value: number) => string
  translate: (x: number | string, y: number | string) => string
  combine: (...args) => string
  important: (style: string) => string
  border: (px: number, isSolid: boolean, color: string) => string
  hexToRgbA: (hex: string, opacity?: string | number) => string
  transition: (cssProperty: string, duration: number, timingFunc: TimingFunc, delay?: number) => string
  linearGradient: (direction: string, fromColor: string, toColor: string) => string
  boxShadow: (horizontal: number, vertical: number, blur: number, spread: number, color: string) => string
  calc: (expr1: string, operator: string, expr2: string) => string
}

