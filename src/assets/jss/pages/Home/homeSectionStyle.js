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
  stonesArea: {
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
    display: 'block',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: '96px',
    paddingBottom: '200px',
  },
  title: {
    zIndex: 1,
    fontFamily: 'Exo',
    fontWeight: 700,
    fontSize: '50px',
    lineHeight: '60px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '1.47px',
    color: '#FFFFFF',
  },
  text31: {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '31px',
    lineHeight: '45px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.65px',
    color: '#ABDEFF',
  },
}

export default homeSectionStyle
