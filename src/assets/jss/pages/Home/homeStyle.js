import { container } from 'assets/jss/PLUTEX'

import BgImage from 'assets/images/Home/bg-img.png'
import Stones01 from 'assets/images/Home/Stones01.png'
import ICOPresaleCard from 'assets/images/Home/ICOPresaleCard.svg'

const homeStyle = {
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
  },
  mt30: {
    marginTop: '30px',
  },
  my50: {
    marginTop: '50px',
    marginBottom: '50px',
  },
  content: {
    color: 'rgba(171, 222, 255, 1)',
    fontFamily: 'Exo',
    fontSize: '21px',
    fontWeight: 400,
    lineHeight: '33px',
    letterSpacing: '0.44px',
  },
  icoPresaleCard: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundImage: 'url(' + ICOPresaleCard + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  planet: {
    width: '100%',
  },
}

export default homeStyle
