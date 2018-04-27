import { rem } from './helpers'

const dimensions: Dimensions = {
  drawerWidth: rem(18),
  paperPadding: rem(1),
  topBarHeight: 70,
}

export default dimensions

export interface Dimensions {
  drawerWidth: number | string
  paperPadding: number | string
  topBarHeight: number | string
}