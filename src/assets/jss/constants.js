const hexToRgb = input => {
  input = input + ''
  input = input.replace('#', '')
  let hexRegex = /[0-9A-Fa-f]/g
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error('input is not a valid hex color.')
  }
  if (input.length === 3) {
    let first = input[0]
    let second = input[1]
    let last = input[2]
    input = first + first + second + second + last + last
  }
  input = input.toUpperCase()
  let first = input[0] + input[1]
  let second = input[2] + input[3]
  let last = input[4] + input[5]
  return parseInt(first, 16) + ', ' + parseInt(second, 16) + ', ' + parseInt(last, 16)
}
// size variables
const sidebarWidth = '366px'
const closeSidebarWidth = '177px'
const headerHeight = '101px'
const footerHeight = '80px'
const mapHeight = 'calc(100vh - 101px - 80px - 20px)'
const horizontalPadding = '22px'
// color variables
const primaryColor = '#96e965'
const lightPrimaryColor = '#b0f886'
const secondaryColor = '#f50057'
const greenColor = ['#96e965', '#2f8c12', '#72ee4c', '#2e8a11']
const blackColor = ['#000', '#0d0c0c', 'rgba(0, 0, 0, 0.87)']
const whiteColor = '#fff'
const weekColor = 'rgba(255, 255, 255, 0.87)'
const favoriteColor = ['#d92626', '#f0f0f0']
const grayColor = [
  '#4a5166',
  '#b5b1b1',
  'rgba(0, 0, 0, 0.6)',
  '#797979',
  '#a3a3a3',
  '#737588',
  '#7f7d7d',
  '#6e6e6e',
  '#f4f4f4',
  '#999999',
  '#c9c8c8',
  'rgba(0, 0, 0, 0.2)',
]
const redColor = '#f03737'
// box shadow
const boxShadow = {
  boxShadow:
    '0 10px 30px -12px rgba(' +
    hexToRgb(blackColor[0]) +
    ', 0.22), 0 4px 25px 0px rgba(' +
    hexToRgb(blackColor[0]) +
    ', 0.12), 0 8px 10px -5px rgba(' +
    hexToRgb(blackColor[0]) +
    ', 0.2)',
}

export {
  sidebarWidth,
  closeSidebarWidth,
  headerHeight,
  footerHeight,
  mapHeight,
  horizontalPadding,
  primaryColor,
  lightPrimaryColor,
  secondaryColor,
  greenColor,
  blackColor,
  whiteColor,
  weekColor,
  grayColor,
  redColor,
  boxShadow,
  favoriteColor,
}
