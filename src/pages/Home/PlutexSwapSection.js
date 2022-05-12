import React from 'react'

// material ui core components
import { Box, Grid, Typography } from '@material-ui/core'

// core components

// images
import MoonImage from 'assets/images/Home/Moon.png'
import PlutexSwap01Image from 'assets/images/Home/PlutexSwap01.png'
import PlutexSwap02Image from 'assets/images/Home/PlutexSwap02.png'
import YellowCircle from 'assets/images/Home/YellowCircle.svg'

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
                  PLTXSwap is not with us just yet, but we have plans to launch our interplanetary decentralized
                  exchange (DEX) on a stardate in the not-too-distant future. We hope this can be sooner rather than
                  later, as decentralized paradigms are much closer to our core philosophy. For now, you can buy PLTX at
                  a number of exchanges.
                  <br />
                  <br />
                  After the PLTXSwap lift off, you can expect the following:
                </Typography>
              </Box>
              <Box mt={1}>
                <Typography className={globalClasses.text21}>
                  <img src={YellowCircle} className={classes.yellowPointer} />
                  <a className={globalClasses.text21 + ' ' + globalClasses.yellowText}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PLTX:
                  </a>{' '}
                  The flagship token that launches in the PLUTEX project in 2021 to an unsuspecting crypto world that
                  didn’t see it coming.
                </Typography>
              </Box>
              <Box mt={1}>
                <Typography className={globalClasses.text21}>
                  <img src={YellowCircle} className={classes.yellowPointer} />
                  <a className={globalClasses.text21 + ' ' + globalClasses.yellowText}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ROCKET:
                  </a>{' '}
                  Hot on the tail of PLTX, the ROCKET token enables users to receive returns on their staked PLTX.
                </Typography>
              </Box>
              <Box mt={1}>
                <Typography className={globalClasses.text21}>
                  <img src={YellowCircle} className={classes.yellowPointer} />
                  <a className={globalClasses.text21 + ' ' + globalClasses.yellowText}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FUTURE TOKENS:
                  </a>{' '}
                  What can we expect next in terms of upcoming, futuristic tokens? MOON token? ALIEN token? All will be
                  revealed very soon!
                  <br />
                  <br />
                </Typography>
              </Box>
              <Box mt={1}>
                <Typography className={globalClasses.text21}>
                  With a lively ecosystem and tokens that are fast gaining popularity in the crypto space, PLUTEX is the
                  galactical phenomenon that every cosmic investor will want their money on.
                  <br />
                  Don’t let yourself wait for light-years before you get onboard – make a commitment to PLUTEX while you
                  still have the chance!
                  <br />
                  <br />
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
