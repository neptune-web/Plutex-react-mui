import React from 'react'

// material ui core components
import { Box, Grid, Typography } from '@material-ui/core'

// images
import SatelliteImage from 'assets/images/Home/metagate-satelite.png'
import Unicorn from 'assets/images/Home/Unicorn.svg'
import FirstBurn from 'assets/images/Home/FirstBurn.svg'
import SecondBurn from 'assets/images/Home/SecondBurn.svg'
import YellowCircle from 'assets/images/Home/YellowCircle.svg'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/ecosystemSectionStyle'
import globalStyles from 'assets/jss/PLUTEX'
const useStyles = makeStyles(styles)
const useGlobalStyles = makeStyles(globalStyles)

const EcosystemSection = () => {
  const classes = useStyles()
  const globalClasses = useGlobalStyles()
  return (
    <Box className={classes.ecosystemSectionArea}>
      <Box className={classes.container}>
        <Grid container display="flex" alignItems="flex-start">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box className={globalClasses.text40Area}>
              <Typography className={globalClasses.text40}>#ECOSYSTEM</Typography>
            </Box>
            <Box className={classes.textContentArea}>
              <Typography className={globalClasses.text21}>
                In this new, futuristic world we live in, space travel is just one of the incredible capabilities at our
                fingertips. Long gone are the days when earthlings were at the mercy of traditional banks that dictate
                terms and leave users with little to no control over their finances. In the new era, we all have the
                power to make our own financial decisions, so we can watch our investments go from decimal to
                infinitesimal.
                <br />
                As we launch the new #PLTX token, we have an egalitarian, decentralized community in mind. We will begin
                with the PLUTEX token, but this will soon be followed by the PLTXSwap decentralized exchange, where PLTX
                will be the first token listed and incentivized.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Box className={classes.cardArea}>
              <Typography className={classes.text20}>200 million PLTX tokens will be minted in total.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={9}>
            <Box className={classes.cardArea + ' ' + classes.rightCard}>
              <Typography className={classes.text20}>
                50 million of these PLTX tokens will be distributed in the initial coin offering (ICO) at a price of
                $0.01, while the remainder will be added later or as part of the rewards fund.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.satelliteArea}>
        <img src={SatelliteImage} className={classes.satelliteImage} />
        <Box className={classes.container}>
          <Grid container>
            <Grid item xs={12} sm={12} md={4}>
              <Box display="block" flexWrap="wrap" mt={7}>
                <Box width={1} display="flex" justifyContent="center">
                  <img src={Unicorn} className={classes.iconStyle} />
                </Box>
                <Box width={1} display="flex" justifyContent="center">
                  <Typography className={classes.text20}>PLTXSwap promising high liquidity</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box display="block" flexWrap="wrap" mt={7}>
                <Box width={1} display="flex" justifyContent="center">
                  <img src={FirstBurn} className={classes.iconStyle} />
                </Box>
                <Box width={1} display="flex" justifyContent="center">
                  <Typography className={classes.text20}>PLTX token first added to the DEX</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box display="block" flexWrap="wrap" mt={7}>
                <Box width={1} display="flex" justifyContent="center">
                  <img src={SecondBurn} className={classes.iconStyle} />
                </Box>
                <Box width={1} display="flex" justifyContent="center">
                  <Typography className={classes.text20}>
                    Additional tokens to be later added to the ecosystem
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mt={10}>
                <Typography className={globalClasses.text21}>
                  <img src={YellowCircle} className={classes.yellowPointer} />
                  <a className={globalClasses.text21 + ' ' + globalClasses.yellowText}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ROCKET
                  </a>{' '}
                  is the token that can be used to receive returns from staked PLTX tokens. When you do this, 2% of all
                  your ROCKET per block (RPB) is distributed to the Astro Pool. This will be added to with an extra 0.2
                  percent of ETH transactions on PLTXSwap.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mt={7}>
                <Typography className={globalClasses.text21}>
                  <img src={YellowCircle} className={classes.yellowPointer} />
                  <a className={globalClasses.text21 + ' ' + globalClasses.yellowText}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COMING SOON
                  </a>{' '}
                  are more tokens that will add to the vibrant mix in the decentralized community where users can
                  invest, borrow, exchange crypto, and bring liquidity to the Astro pool.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default EcosystemSection
