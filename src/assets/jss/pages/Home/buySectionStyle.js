import { container } from 'assets/jss/constants'

const buySectionStyle = {
  buySectionArea: {
    width: '100%',
    position: 'relative',
  },
  starLightArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
    marginTop: '-400px',
    width: '100%',
    maxWidth: '515px',
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
  foxImage: {
    width: '100%',
    maxWidth: '300px',
  },
  buttonArea: {
    '@media (max-width: 600px)': { display: 'flex', justifyContent: 'center' },
    '@media (min-width: 600px)': { display: 'flex', justifyContent: 'center' },
    '@media (min-width: 768px)': { display: 'flex', justifyContent: 'center' },
    '@media (min-width: 960px)': { display: 'flex', justifyContent: 'flex-start' },
    '@media (min-width: 1280px)': { display: 'flex', justifyContent: 'flex-start' },
  },
}

export default buySectionStyle
