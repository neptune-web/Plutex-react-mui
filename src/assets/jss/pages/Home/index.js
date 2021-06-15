import BgImage from 'assets/images/Home/bg-img.png'

const homeStyle = {
  body: {
    width: '100%',
    backgroundImage: 'url(' + BgImage + ')',
    height: '100%',
    minHeight: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  container: {
    width: '100%',
    maxWidth: '1160px',
  },
}

export default homeStyle
