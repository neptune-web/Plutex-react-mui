import { container } from 'assets/jss/constants'

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
    '@media (max-width: 600px)': { paddingBottom: '-20px' },
    '@media (min-width: 600px)': { paddingBottom: '-20px' },
    '@media (min-width: 768px)': { paddingBottom: '0px' },
    '@media (min-width: 960px)': { paddingBottom: '30px' },
    '@media (min-width: 1280px)': { paddingBottom: '60px' },
  },
  title: {
    zIndex: 1,
    fontFamily: 'Exo',
    fontWeight: 700,
    '@media (max-width: 600px)': { fontSize: '30px', lineHeight: '40px' },
    '@media (min-width: 600px)': { fontSize: '30px', lineHeight: '40px' },
    '@media (min-width: 768px)': { fontSize: '35px', lineHeight: '50px' },
    '@media (min-width: 960px)': { fontSize: '45px', lineHeight: '55px' },
    '@media (min-width: 1280px)': { fontSize: '50px', lineHeight: '60px' },
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '1.47px',
    color: '#FFFFFF',
  },
  text31: {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 400,
    '@media (max-width: 600px)': { fontSize: '16px', lineHeight: '24px' },
    '@media (min-width: 600px)': { fontSize: '16px', lineHeight: '24px' },
    '@media (min-width: 768px)': { fontSize: '20px', lineHeight: '32px' },
    '@media (min-width: 960px)': { fontSize: '26px', lineHeight: '38px' },
    '@media (min-width: 1280px)': { fontSize: '31px', lineHeight: '45px' },
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.65px',
    color: '#ABDEFF',
  },
  buttonArea: {
    '@media (max-width: 600px)': { display: 'flex', justifyContent: 'center' },
    '@media (min-width: 600px)': { display: 'flex', justifyContent: 'center' },
    '@media (min-width: 768px)': { display: 'flex', justifyContent: 'center' },
    '@media (min-width: 960px)': { display: 'flex', justifyContent: 'flex-start' },
    '@media (min-width: 1280px)': { display: 'flex', justifyContent: 'flex-start' },
  },
  foxArea: {
    width: '100%',
    zIndex: 1,
  },
  foxImage: {
    width: '100%',
  },
}

export default homeSectionStyle
