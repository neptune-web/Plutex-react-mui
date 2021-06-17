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
    '@media (max-width: 600px)': { marginTop: '100px' },
    '@media (min-width: 600px)': { marginTop: '130px' },
    '@media (min-width: 768px)': { marginTop: '160px' },
    '@media (min-width: 960px)': { marginTop: '200px' },
    '@media (min-width: 1280px)': { marginTop: '237px' },
  },
}

export default plutexSwapSectionStyle
