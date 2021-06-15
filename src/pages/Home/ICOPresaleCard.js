import React from 'react'

// material ui core components
import { Box } from '@material-ui/core'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/icoPresaleCardStyle'

const useStyles = makeStyles(styles)

const ICOPresaleCard = () => {
  const classes = useStyles()

  return <Box display="flex" justifyContent="center" className={classes.icoPresaleCard}></Box>
}

export default ICOPresaleCard
