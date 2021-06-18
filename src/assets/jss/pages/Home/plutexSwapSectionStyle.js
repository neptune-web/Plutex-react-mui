import { container } from 'assets/jss/constants'

const plutexSwapSectionStyle = {
  plutexSwapSectionArea: {
    width: '100%',
    position: 'relative',
  },
  moon: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 0,
    marginTop: '-400px',
    width: '100%',
    maxWidth: '445px',
  },
  container: {
    ...container,
  },
  content: {
    '@media (max-width: 600px)': { marginTop: '0px' },
    '@media (min-width: 600px)': { marginTop: '30px' },
    '@media (min-width: 768px)': { marginTop: '60px' },
    '@media (min-width: 960px)': { marginTop: '100px' },
    '@media (min-width: 1280px)': { marginTop: '137px' },
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

export default plutexSwapSectionStyle
