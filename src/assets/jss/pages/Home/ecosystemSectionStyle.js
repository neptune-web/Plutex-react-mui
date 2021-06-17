import { container } from 'assets/jss/PLUTEX'

const ecosystemSectionStyle = {
  ecosystemSectionArea: {
    width: '100%',
    position: 'relative',
  },
  container: {
    ...container,
  },
  ecosystemTitleArea: {
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
  ecosystemTitle: {
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
  yellowPointerArea: {
    position: 'absolute',
    top: '0px',
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
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
  yellowPointer: {
    position: 'absolute',
    top: '-2px',
    left: '-12px',
  },
  yellowText: {
    color: '#F36E00 !important',
    fontWeight: 700,
  },
  cardArea: {
    width: 'calc(100% - 60px)',
    padding: '30px',
    backgroundColor: '#232164',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  rightCard: {
    '@media (max-width: 600px)': { width: 'calc(100% - 60px)', marginLeft: '0px' },
    '@media (min-width: 600px)': { width: 'calc(100% - 60px)', marginLeft: '0px' },
    '@media (min-width: 768px)': { width: 'calc(100% - 60px)', marginLeft: '0px' },
    '@media (min-width: 960px)': { width: 'calc(100% - 85px)', marginLeft: '25px' },
    '@media (min-width: 1280px)': { width: 'calc(100% - 85px)', marginLeft: '25px' },
  },
  text20: {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 400,
    '@media (max-width: 600px)': { fontSize: '18px', lineHeight: '27px' },
    '@media (min-width: 600px)': { fontSize: '18px', lineHeight: '27px' },
    '@media (min-width: 768px)': { fontSize: '18px', lineHeight: '27px' },
    '@media (min-width: 960px)': { fontSize: '20px', lineHeight: '30px' },
    '@media (min-width: 1280px)': { fontSize: '20px', lineHeight: '30px' },
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.65px',
    color: '#FFFFFF',
  },
  satelliteArea: {
    position: 'relative',
    width: '100%',
  },
  satelliteImage: {
    position: 'absolute',
    top: -40,
    right: 0,
    zIndex: 0,
  },
  iconStyle: {
    width: '78px',
    height: '78px',
    marginBottom: '10px',
  },
}

export default ecosystemSectionStyle
