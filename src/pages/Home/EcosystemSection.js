import React from 'react'

// material ui core components
import { Box, Grid, Typography } from '@material-ui/core'

// core components

// images
import SatelliteImage from 'assets/images/Home/metagate-satelite.png'
import Unicorn from 'assets/images/Home/Unicorn.svg'
import FirstBurn from 'assets/images/Home/FirstBurn.svg'
import SecondBurn from 'assets/images/Home/SecondBurn.svg'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/ecosystemSectionStyle'
const useStyles = makeStyles(styles)

const EcosystemSection = () => {
  const classes = useStyles()
  return (
    <Box className={classes.ecosystemSectionArea}>
      <Box className={classes.container}>
        <Grid container display="flex" alignItems="flex-start">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box className={classes.ecosystemTitleArea}>
              <Typography className={classes.ecosystemTitle}>#ECOSYSTEM</Typography>
            </Box>
            <Box className={classes.textContentArea}>
              <Box className={classes.yellowPointerArea}>
                <Box className={classes.yellowPointer}></Box>
                <Typography className={classes.yellowText21}>PLTX</Typography>
              </Box>
              <Typography className={classes.text21}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; is an experiment in
                decentralized spontaneous community building. PLTX token is our first token and allows users to hold
                Billions or even Trillions of them. Nicknamed the DOGECOIN KILLER, this ERC-20 ONLY token can remain
                well under a penny and still outpace Dogecoin in a small amount of time (relatively speaking). Popular
                worldwide, and already up thousands of percent, PLTX token ($PLTX) is the first cryptocurrency token to
                be listed and incentivized on PLTXSwap, our decentralized exchange.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Box className={classes.cardArea}>
              <Typography className={classes.text20}>
                We locked the 50% of the total supply to Uniswap and threw away the keys!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={9}>
            <Box className={classes.cardArea + ' ' + classes.rightCard}>
              <Typography className={classes.text20}>
                The remaining 50% was burned to Vitalik Buterin and we were the first project following this path, so
                everyone has to buy on the open market, ensuring a fair and complete distribution where devs don&apos;t
                own team tokens they can dump on the community.
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
                  <Typography className={classes.text20}>Liquidity Locked to Uniswap</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box display="block" flexWrap="wrap" mt={7}>
                <Box width={1} display="flex" justifyContent="center">
                  <img src={FirstBurn} className={classes.iconStyle} />
                </Box>
                <Box width={1} display="flex" justifyContent="center">
                  <Typography className={classes.text20}>First burn to VB</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box display="block" flexWrap="wrap" mt={7}>
                <Box width={1} display="flex" justifyContent="center">
                  <img src={SecondBurn} className={classes.iconStyle} />
                </Box>
                <Box width={1} display="flex" justifyContent="center">
                  <Typography className={classes.text20}>Second burn to VB</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default EcosystemSection
