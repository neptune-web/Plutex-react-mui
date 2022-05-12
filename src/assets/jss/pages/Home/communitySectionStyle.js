import { container } from 'assets/jss/constants'

const communitySectionStyle = {
  plutexSwapSectionArea: {
    width: '100%',
    position: 'relative',
  },
  planetDecoration: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
    marginTop: '-180px',
    width: '100%',
    maxWidth: '445px',
  },
  container: {
    ...container,
    paddingBottom: '200px',
  },
  content: {
    '@media (max-width: 600px)': { marginTop: '00px' },
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
  inputArea: {
    height: '80px',
    borderRadius: '16px',
    padding: '17px 60px',
    maxWidth: '634px',
    width: '100%',
    backgroundColor: '#333375',
    fontFamily: 'Exo',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '21px',
    lineHeight: '33px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.44px',
    color: '#FE9B01',
  },
  buttonGroupArea: {
    maxWidth: '634px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  galaxyPlanet: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 0,
    width: '100%',
    maxWidth: '445px',
  },
}

export default communitySectionStyle
