import { containerFluid } from 'assets/jss/PLUTEX'

const footerStyle = {
  body: {
    width: '100%',
    height: '58px',
    backgroundColor: '#333375',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    ...containerFluid,
    '@media (max-width: 768px)': {
      maxWidth: '540px',
    },
    '@media (min-width: 768px)': {
      maxWidth: '640px',
    },
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    color: 'rgba(255, 255, 255, 1)',
    margin: '0px 20px',
    fontSize: '16px',
    fontWeight: 500,
    LineHeight: '41px',
    cursor: 'pointer',
  },
}

export default footerStyle
