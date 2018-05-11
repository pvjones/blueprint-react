import React from 'react'
import ClassNames from 'classnames'
import { withStyles, StyleRulesCallback, WithStyles } from '../Common'

const exists = value => value !== undefined

const Flexbox: React.SFC<MergedProps> = ({
  alignContent,
  alignItems,
  alignSelf,
  children,
  classes,
  className: classNameProp,
  flex,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  height,
  justifyContent,
  marginBottom,
  paddingTop,
  style: styleProp,
  width,
  minWidth,
  maxWidth,
  ...other,
}) => {

  const flexProps = exists(flex) ? {} : {
    flexGrow,
    flexShrink,
    flexBasis,
  }

  const mergedStyleProps = {
    flex,
    height,
    width,
    minWidth,
    maxWidth,
    marginBottom,
    paddingTop,
    ...flexProps,
  }

  return (
    <div
      style={{
        ...mergedStyleProps,
        ...styleProp,
      }}
      className={ClassNames(classes.display, {
        [classes[`alignContent_${alignContent}`]]: exists(alignContent),
        [classes[`alignItems_${alignItems}`]]: exists(alignItems),
        [classes[`alignSelf_${alignSelf}`]]: exists(alignSelf),
        [classes[`justifyContent_${justifyContent}`]]: exists(justifyContent),
        [classes[`flexDirection_${flexDirection}`]]: exists(flexDirection),
        [classes[`flexWrap_${flexWrap}`]]: exists(flexWrap),
      },
        classNameProp)}
      {...other}
    >
      {children}
    </div>
  )
}

export type AlignContentKey = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch'
export type AlignItemsKey = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch'
export type JustifyContentKey = 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between'
export type FlexDirectionKey = 'column-reverse' | 'column' | 'row-reverse' | 'row'
export type FlexWrapKey = 'nowrap' | 'wrap-reverse' | 'wrap'

export interface FlexboxProps extends React.ClassAttributes<{}> {
  alignContent?: AlignContentKey
  alignItems?: AlignItemsKey
  alignSelf?: AlignItemsKey
  className?: string
  flex?: string
  flexBasis?: string
  flexDirection?: FlexDirectionKey
  flexGrow?: number
  flexShrink?: number
  flexWrap?: FlexWrapKey
  height?: string
  justifyContent?: JustifyContentKey
  marginBottom?: string
  paddingTop?: string
  style?: any
  width?: string
  minWidth?: string
  maxWidth?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

type ClassKey = string
const styles: StyleRulesCallback<ClassKey> = () => ({
  display: {
    display: 'flex',
  },
  'alignContent_center': { alignContent: 'center' },
  'alignContent_flex-end': { alignContent: 'flex-end' },
  'alignContent_flex-start': { alignContent: 'flex-start' },
  'alignContent_space-around': { alignContent: 'space-around' },
  'alignContent_space-between': { alignContent: 'space-between' },
  'alignContent_stretch': { alignContent: 'stretch' },

  'alignItems_baseline': { alignItems: 'baseline' },
  'alignItems_center': { alignItems: 'center' },
  'alignItems_flex-end': { alignItems: 'flex-end' },
  'alignItems_flex-start': { alignItems: 'flex-start' },
  'alignItems_stretch': { alignItems: 'stretch' },

  'alignSelf_baseline': { alignSelf: 'baseline' },
  'alignSelf_center': { alignSelf: 'center' },
  'alignSelf_flex-end': { alignSelf: 'flex-end' },
  'alignSelf_flex-start': { alignSelf: 'flex-start' },
  'alignSelf_stretch': { alignSelf: 'stretch' },

  'justifyContent_center': { justifyContent: 'center' },
  'justifyContent_flex-end': { justifyContent: 'flex-end' },
  'justifyContent_flex-start': { justifyContent: 'flex-start' },
  'justifyContent_space-around': { justifyContent: 'space-around' },
  'justifyContent_space-between': { justifyContent: 'space-between' },

  'flexDirection_column-reverse': { flexDirection: 'column-reverse' },
  'flexDirection_column': { flexDirection: 'column' },
  'flexDirection_row-reverse': { flexDirection: 'row-reverse' },
  'flexDirection_row': { flexDirection: 'row' },

  'flexWrap_nowrap': { flexWrap: 'nowrap' },
  'flexWrap_wrap-reverse': { flexWrap: 'wrap-reverse' },
  'flexWrap_wrap': { flexWrap: 'wrap' },
})

export default withStyles(styles)(Flexbox)

type MergedProps = FlexboxProps & WithStyles<ClassKey>