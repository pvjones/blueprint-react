import { fontSize } from './theme'

export const rem = value => `${value}rem`

export const px = value => `${value}px`

export const percent = value => `${value}%`

export const seconds = value => `${value}s`

export const scale = value => `scale(${value})`

export const translate = (x, y) => `translate(${x}, ${y})`

export const combine = (...args) => [...args].map(x => {
  if (typeof x === 'number') {
    return px(x)
  }
  return x
}).join(' ')

export const important = style => `${style} !important`

export const border = (pxNum, isSolid, color) => `${pxNum}px ${isSolid ? 'solid' : 'dashed'} ${color}`

export const pxToRem = pxValue => `${Number(pxValue) / fontSize}rem`

export const hexToRgbA = (hex, opacity) => {
  let c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = `0x${c.join('')}`

    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${opacity || '1'})`
  }

  throw new Error('Improper hex string format')
}

export const transition = (cssProperty, duration, timingFunc, delay) =>
  `${cssProperty} ${duration}s ${timingFunc} ${delay}s`

export const linearGradient = (direction, fromColor, toColor) =>
  `linear-gradient(${direction}, ${fromColor}, ${toColor})`

export const boxShadow = (horizontal, vertical, blur, spread, color) =>
  `${horizontal}px ${vertical}px ${blur}px ${spread} ${color}`

export const calc = (expr1, operator, expr2) => `calc(${expr1} ${operator} ${expr2})`
