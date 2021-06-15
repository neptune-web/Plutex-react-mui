/*eslint-disable*/
import React from 'react'

// @material-ui/core components
import { List, ListItem, Typography } from '@material-ui/core'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Header/headerLinksStyle.js'

const useStyles = makeStyles(styles)

const HeaderLinks = () => {
  const classes = useStyles()
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Typography className={classes.text}>ECOSYSTEM</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography className={classes.text}>BUY</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography className={classes.text}>PLUTEXWAP</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography className={classes.text}>LAUNCHPAD</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography className={classes.text}>COMMUNITY</Typography>
      </ListItem>
    </List>
  )
}

export default HeaderLinks
