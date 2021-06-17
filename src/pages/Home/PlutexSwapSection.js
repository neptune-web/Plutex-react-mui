import React from 'react'

// material ui core components
import { Box, Grid, Typography } from '@material-ui/core'

// core components

// images
import MoonImage from 'assets/images/Home/Moon.png'
import PlutexSwap01Image from 'assets/images/Home/PlutexSwap01.png'
import PlutexSwap02Image from 'assets/images/Home/PlutexSwap02.png'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/plutexSwapSectionStyle'
import globalStyles from 'assets/jss/PLUTEX'
const useStyles = makeStyles(styles)
const useGlobalStyles = makeStyles(globalStyles)

const PlutexSwapSection = () => {
  const classes = useStyles()
  const globalClasses = useGlobalStyles()
  return (
    <Box className={classes.plutexSwapSectionArea}>
      <img src={MoonImage} className={classes.moon} />
      <Box className={classes.container}>
        <Box className={classes.content}>
          <Grid container display="flex" justify="flex-start">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box className={globalClasses.text40Area} mb={5}>
                <Typography className={globalClasses.text40}>#PLUTEXSWAP</Typography>
              </Box>
              <Box className={classes.textContentArea}>
                <Typography className={globalClasses.text21}>
                  PLTXSwap is undergoing security tests, audits and final updates to prepare for a safe launch!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img src={PlutexSwap01Image} className={classes.imageStyle} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img src={PlutexSwap02Image} className={classes.imageStyle} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default PlutexSwapSection
