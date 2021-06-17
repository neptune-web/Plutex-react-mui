// import * from 'assets/jss/constants'

const GlobalStyle = {
  text40: {
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
}

export default GlobalStyle
