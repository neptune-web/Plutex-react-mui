import { container } from 'assets/jss/constants'

import BgImage from 'assets/images/Presale/bg-img.png'
import Stones01 from 'assets/images/Presale/Stones01.png'
import ICOPresaleCard from 'assets/images/Presale/ICOPresaleCard.svg'

const presaleStyle = {
  body: {
    width: '100%',
    backgroundImage: 'url(' + BgImage + ')',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  container: {
    ...container,
    display: 'block',
    justifyContent: 'center',
    position: 'relative',
  },
  fullWidth: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: '10px',
  },
  stone01Area: {
    position: 'relative',
    marginTop: '48px',
    width: '292px',
    height: '250px',
    opacity: '0.8',
    backgroundImage: 'url(' + Stones01 + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  title: {
    color: '#fff',
    fontFamily: 'Exo',
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: '58.46px',
    letterSpacing: '1.18px',
    '@media (max-width: 960px)': {
      marginTop: '100px',
    },
    '@media (min-width: 960px)': {
      marginTop: '0px',
    },
  },
  mt30: {
    marginTop: '30px',
  },
  my50: {
    marginTop: '50px',
    marginBottom: '50px',
  },
  icoPresaleCard: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundImage: 'url(' + ICOPresaleCard + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  imgStyle: {
    width: '100%',
    objectFit: 'cover',
  },
}

export default presaleStyle
