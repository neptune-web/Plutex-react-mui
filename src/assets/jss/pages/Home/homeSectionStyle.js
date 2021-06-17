import { container } from 'assets/jss/PLUTEX'

const homeSectionStyle = {
  homeSectionArea: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  planetArea: {
    zIndex: 0,
    position: 'absolute',
    top: 0,
    maxWidth: '1300px',
  },
  planetImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  stonesImage: {
    zIndex: 0,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  container: {
    ...container,
  },
  content: {
    paddingTop: '96px',
    '@media (min-width: 576px)': {
      paddingBottom: '20px',
    },
    '@media (min-width: 768px)': {
      paddingBottom: '60px',
    },
    '@media (min-width: 992px)': {
      paddingBottom: '130px',
    },
    '@media (min-width: 1200px)': {
      paddingBottom: '200px',
    },
  },
  title: {
    zIndex: 1,
    fontFamily: 'Exo',
    fontWeight: 700,
    '@media (min-width: 576px)': {
      fontSize: '30px',
      lineHeight: '40px',
    },
    '@media (min-width: 768px)': {
      fontSize: '35px',
      lineHeight: '50px',
    },
    '@media (min-width: 992px)': {
      fontSize: '45px',
      lineHeight: '55px',
    },
    '@media (min-width: 1200px)': {
      fontSize: '50px',
      lineHeight: '60px',
    },
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '1.47px',
    color: '#FFFFFF',
  },
  text31: {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 400,
    '@media (min-width: 576px)': {
      fontSize: '16px',
      lineHeight: '24px',
    },
    '@media (min-width: 768px)': {
      fontSize: '20px',
      lineHeight: '32px',
    },
    '@media (min-width: 992px)': {
      fontSize: '26px',
      lineHeight: '38px',
    },
    '@media (min-width: 1200px)': {
      fontSize: '31px',
      lineHeight: '45px',
    },
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.65px',
    color: '#ABDEFF',
  },
  foxArea: {
    width: '100%',
  },
  foxImage: {
    width: '100%',
  },
}

export default homeSectionStyle
