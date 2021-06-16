import { defaultFont } from 'assets/jss/PLUTEX'

const headerLinksStyle = theme => ({
  list: {
    ...defaultFont,
    margin: 0,
    paddingLeft: '0',
    listStyle: 'none',
    paddingTop: '0',
    paddingBottom: '0',
    color: 'inherit',
  },
  listItem: {
    ...defaultFont,
    float: 'left',
    color: 'inherit',
    position: 'relative',
    display: 'block',
    width: 'auto',
    margin: '10px',
    padding: '0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '&:after': {
        width: 'calc(100% - 30px)',
        content: '""',
        display: 'block',
        height: '1px',
        marginLeft: '15px',
        backgroundColor: '#e5e5e5',
      },
    },
  },
  text: {
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    fontSize: '14px',
    color: '#fff',
    lingHeight: '38px',
    letterSpacing: '0.26px',
    cursor: 'pointer',
    '&:hover': {
      color: '#E97800',
    },
  },
  selectedText: {
    fontFamily: 'Source Sans Pro',
    fontWeight: 500,
    fontSize: '14px',
    color: '#E97800',
    lingHeight: '38px',
    letterSpacing: '0.26px',
    cursor: 'pointer',
  },
})

export default headerLinksStyle
