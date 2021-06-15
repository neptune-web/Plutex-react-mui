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
    ...defaultFont,
    fontSize: '14px',
    lingHeight: '38px',
    cursor: 'pointer',
  },
})

export default headerLinksStyle
