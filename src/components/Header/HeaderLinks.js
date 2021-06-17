/*eslint-disable*/
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import { useHistory } from 'react-router-dom'

// @material-ui/core components
import { List, ListItem, Typography } from '@material-ui/core'

// import context variables
import { useNavigation } from 'hook/Context/NavigationContext'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Header/headerLinksStyle.js'

const useStyles = makeStyles(styles)

const HeaderLinks = () => {
  const classes = useStyles()

  const history = useHistory()

  // context variables
  const { navigation, setNavigation } = useNavigation()

  // handlers
  const handleGotoNav = path => {
    setNavigation(path)
    history.push('/#' + path)
  }
  const handleGotoPresale = path => {
    setNavigation(path)
    history.push(path)
  }
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem} onClick={() => handleGotoNav('ecosystem')}>
        <Link
          to="/home#ecosystem"
          className={navigation === 'ecosystem' ? classes.selectedText : classes.text}
          onClick={() => handleGotoNav('ecosystem')}
        >
          ECOSYSTEM
        </Link>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => handleGotoNav('buy')}>
        <Link to="/home#buy" className={navigation === 'buy' ? classes.selectedText : classes.text}>
          BUY
        </Link>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => handleGotoNav('plutexwap')}>
        <Link to="/home#plutexwap" className={navigation === 'plutexwap' ? classes.selectedText : classes.text}>
          PLUTEXWAP
        </Link>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => handleGotoNav('launchpad')}>
        <Link to="/home#launchpad" className={navigation === 'launchpad' ? classes.selectedText : classes.text}>
          LAUNCHPAD
        </Link>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => handleGotoNav('community')}>
        <Link to="/home#community" className={navigation === 'community' ? classes.selectedText : classes.text}>
          COMMUNITY
        </Link>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => handleGotoPresale('presale')}>
        <Typography className={navigation === 'presale' ? classes.selectedText : classes.text}>PRESALE</Typography>
      </ListItem>
    </List>
  )
}

export default HeaderLinks
