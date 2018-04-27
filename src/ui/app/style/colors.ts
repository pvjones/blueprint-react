const colors: Colors = {
  blue: {
    100: '#004A73',
    200: '#006296',
    300: '#0075B5',
    400: '#0089D4',
    500: '#009BF0',
    600: '#51BBFF',
    700: '#7BCDFF',
    800: '#7BCDFF',
  },
  coral: {
    100: '#FF5637',
    200: '#FF907A',
  },
}

export default colors

export type Colors = Record<string, Record<string, string>>