import { container } from 'assets/jss/constants'

const launchPadSectionStyle = {
  plutexSwapSectionArea: {
    width: '100%',
    position: 'relative',
  },
  stones02: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
    marginTop: '-350px',
    width: '100%',
    maxWidth: '445px',
  },
  container: {
    ...container,
  },
  content: {
    '@media (max-width: 600px)': { marginTop: '100px' },
    '@media (min-width: 600px)': { marginTop: '130px' },
    '@media (min-width: 768px)': { marginTop: '160px' },
    '@media (min-width: 960px)': { marginTop: '200px' },
    '@media (min-width: 1280px)': { marginTop: '237px' },
  },
  textContentArea: {
    display: 'flex',
    position: 'relative',
    marginBottom: '30px',
    justifyContent: 'flex-start',
    '@media (max-width: 600px)': { marginBottom: '30px' },
    '@media (min-width: 600px)': { marginBottom: '35px' },
    '@media (min-width: 768px)': { marginBottom: '40px' },
    '@media (min-width: 960px)': { marginBottom: '45px' },
    '@media (min-width: 1280px)': { marginBottom: '55px' },
  },
  imageStyle: {
    width: 'calc(100% - 18px)',
    margin: '9px',
  },
}

export default launchPadSectionStyle
