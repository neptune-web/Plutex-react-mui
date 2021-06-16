/*eslint-disable*/
import React from 'react'

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
    history.push('home')
  }
  const handleGotoPresale = path => {
    setNavigation(path)
    history.push(path)
  }
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem} onClick={() => handleGotoNav('ecosystem')}>
        <Typography className={navigation === 'ecosystem' ? classes.selectedText : classes.text}>ECOSYSTEM</Typography>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => handleGotoNav('buy')}>
        <Typography className={navigation === 'buy' ? classes.selectedText : classes.text}>BUY</Typography>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => handleGotoNav('plutexwap')}>
        <Typography className={navigation === 'plutexwap' ? classes.selectedText : classes.text}>PLUTEXWAP</Typography>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => handleGotoNav('launchpad')}>
        <Typography className={navigation === 'launchpad' ? classes.selectedText : classes.text}>LAUNCHPAD</Typography>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => handleGotoNav('community')}>
        <Typography className={navigation === 'community' ? classes.selectedText : classes.text}>COMMUNITY</Typography>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => handleGotoPresale('presale')}>
        <Typography className={navigation === 'presale' ? classes.selectedText : classes.text}>PRESALE</Typography>
      </ListItem>
    </List>
  )
}

export default HeaderLinks
