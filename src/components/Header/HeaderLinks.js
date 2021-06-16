/*eslint-disable*/
import React from 'react'

import { useHistory } from 'react-router-dom'

// @material-ui/core components
import { List, ListItem, Typography } from '@material-ui/core'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Header/headerLinksStyle.js'

const useStyles = makeStyles(styles)

const HeaderLinks = () => {
  const classes = useStyles()

  const history = useHistory()

  // handlers
  const handleGotoNav = path => {
    history.push('home#' + path)
  }
  const handleGotoPresale = path => {
    history.push(path)
  }
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem} onClick={() => handleGotoNav('ecosystem')}>
        <Typography className={classes.text}>ECOSYSTEM</Typography>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => handleGotoNav('buy')}>
        <Typography className={classes.text}>BUY</Typography>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => handleGotoNav('plutexwap')}>
        <Typography className={classes.text}>PLUTEXWAP</Typography>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => handleGotoNav('launchpad')}>
        <Typography className={classes.text}>LAUNCHPAD</Typography>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => handleGotoNav('community')}>
        <Typography className={classes.text}>COMMUNITY</Typography>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => handleGotoPresale('presale')}>
        <Typography className={classes.text}>PRESALE</Typography>
      </ListItem>
    </List>
  )
}

export default HeaderLinks
