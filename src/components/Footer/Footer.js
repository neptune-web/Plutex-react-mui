import React from 'react'

// material ui core components
import { Box, Typography } from '@material-ui/core'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Footer/footerStyle'

const useStyles = makeStyles(styles)

const Footer = () => {
  const classes = useStyles()

  return (
    <Box className={classes.body}>
      <Box className={classes.container}>
        <Typography className={classes.text}>Medium</Typography>
        <Typography className={classes.text}>Etherscan</Typography>
        <Typography className={classes.text}>Coinmarketcap</Typography>
        <Typography className={classes.text}>Coingecko</Typography>
      </Box>
    </Box>
  )
}

export default Footer
