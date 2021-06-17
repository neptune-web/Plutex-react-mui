import { container } from 'assets/jss/PLUTEX'

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
  buyTitleArea: {
    display: 'flex',
    marginBottom: '30px',
    justifyContent: 'center',
    '@media (max-width: 600px)': {
      marginBottom: '30px',
      justifyContent: 'center',
    },
    '@media (min-width: 600px)': {
      marginBottom: '30px',
      justifyContent: 'center',
    },
    '@media (min-width: 768px)': {
      marginBottom: '33px',
      justifyContent: 'center',
    },
    '@media (min-width: 960px)': {
      marginBottom: '34px',
      justifyContent: 'flex-start',
    },
    '@media (min-width: 1280px)': {
      marginBottom: '40px',
      justifyContent: 'flex-start',
    },
  },
  buyTitle: {
    zIndex: 1,
    fontFamily: 'Exo',
    fontWeight: 700,
    fontSize: '30px',
    lineHeight: '60px',
    '@media (max-width: 600px)': {
      fontSize: '30px',
      lineHeight: '60px',
    },
    '@media (min-width: 600px)': {
      fontSize: '30px',
      lineHeight: '60px',
    },
    '@media (min-width: 768px)': {
      fontSize: '34px',
      lineHeight: '60px',
    },
    '@media (min-width: 960px)': {
      fontSize: '38px',
      lineHeight: '60px',
    },
    '@media (min-width: 1280px)': {
      fontSize: '40px',
      lineHeight: '60px',
    },
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '1.47px',
    color: '#FFFFFF',
  },
  text21: {
    position: 'relative',
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 400,
    '@media (max-width: 600px)': { fontSize: '18px', lineHeight: '27px' },
    '@media (min-width: 600px)': { fontSize: '18px', lineHeight: '27px' },
    '@media (min-width: 768px)': { fontSize: '19px', lineHeight: '29px' },
    '@media (min-width: 960px)': { fontSize: '20px', lineHeight: '31px' },
    '@media (min-width: 1280px)': { fontSize: '21px', lineHeight: '33px' },
    alignItems: 'center',
    letterSpacing: '0.65px',
    color: '#ABDEFF',
  },
  yellowText: {
    color: '#F36E00 !important',
    fontWeight: 700,
  },
  whiteText: {
    color: '#FFFFFF !important',
    fontWeight: 400,
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
