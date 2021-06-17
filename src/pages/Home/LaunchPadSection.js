import React from 'react'

// material ui core components
import { Box, Grid, Typography } from '@material-ui/core'

// core components

// images
import Stones02Image from 'assets/images/Home/Stones02.png'
import PlutexSwap01Image from 'assets/images/Home/PlutexSwap01.png'
import PlutexSwap02Image from 'assets/images/Home/PlutexSwap02.png'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/launchPadSectionStyle'
import globalStyles from 'assets/jss/PLUTEX'
const useStyles = makeStyles(styles)
const useGlobalStyles = makeStyles(globalStyles)

const LaunchPadSection = () => {
  const classes = useStyles()
  const globalClasses = useGlobalStyles()
  return (
    <Box className={classes.plutexSwapSectionArea}>
      <img src={Stones02Image} className={classes.stones02} />
      <Box className={classes.container}>
        <Box className={classes.content}>
          <Grid container display="flex" justify="flex-start">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box className={globalClasses.text40Area} mb={5}>
                <Typography className={globalClasses.text40}>#LAUNCHPAD</Typography>
              </Box>
              <Box className={classes.textContentArea}>
                <Typography className={globalClasses.text21}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                  <br />
                  <br />
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in mollit anim id est laborum.
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

export default LaunchPadSection
