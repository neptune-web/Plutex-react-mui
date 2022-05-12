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
                  In 2021, it is not easy for a coin to get noticed in the competitive universe of crypto, which is why
                  launchpads are here to help. We know that PLUTEX is one of the shining stars that can be a source of
                  riches for those who are ready to investigate. This&apos;s why we&apos;re planning a launchpad to
                  connect with all space travelers who recognize true talent and give them the chance to make their bids
                  while the costs are at their lowest.
                  <br />
                  <br />
                  Take a look at the PLUTEX Launchpad so you can get here before the crowds arrive! Those who stay ahead
                  will reap the highest rewards.
                  <br />
                  <br />
                  We aim to use the funds raised at the launchpad for ongoing projects that will sustain and build on
                  the PLUTEX ecosystem. We have many projects on the roadmap we are working towards, including a DApp,
                  the PLTX exchange, the ROCKET token, and additional tokens that we will introduce to the ecosystem.
                  <br />
                  <br />
                  There’s a whole crypto universe out there to discover and the possibilities are infinite!
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
