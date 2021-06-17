import { container } from 'assets/jss/constants'

import BgImage from 'assets/images/Home/bg-img.png'

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
    paddingTop: '96px',
  },
}

export default homeStyle
