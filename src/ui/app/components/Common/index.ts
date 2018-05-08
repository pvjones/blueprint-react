import { StyleRules } from 'material-ui/styles'
import { AppTheme } from '../../style/theme'

export type StyleRulesCallback<ClassKey extends string = string> = (theme: AppTheme) => StyleRules<ClassKey>

export { withStyles } from 'material-ui'

export {
  WithStyles,
  ClassNameMap,
} from 'material-ui/styles/withStyles'

export { default as classNames } from 'classnames'