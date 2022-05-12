import React from 'react'

// material ui core components
import { Box, Grid, Typography } from '@material-ui/core'

// core components
import Button from 'components/Button/Button'

// images
import FoxImage from 'assets/images/Home/Fox02.svg'
import StarLightImage from 'assets/images/Home/StarLight.png'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/buySectionStyle'
import globalStyles from 'assets/jss/PLUTEX'
const useStyles = makeStyles(styles)
const useGlobalStyles = makeStyles(globalStyles)

const BuySection = () => {
  const classes = useStyles()
  const globalClasses = useGlobalStyles()
  return (
    <Box className={classes.buySectionArea}>
      <img src={StarLightImage} className={classes.starLightArea} />
      <Box className={classes.container}>
        <Box className={classes.content}>
          <Grid container display="flex" justify="space-between">
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Box display="flex" justifyContent="center" mb={4.5}>
                <img src={FoxImage} className={classes.foxImage} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Box className={globalClasses.text40Area}>
                <Typography className={globalClasses.text40}>#HOW TO BUY</Typography>
              </Box>
              <Box mb={5}>
                <Typography className={globalClasses.text21}>
                  Right now, you can only purchase{' '}
                  <a className={globalClasses.text21 + ' ' + globalClasses.yellowText}>PLTX</a> on the exchanges that
                  have listed the currency. However, when the PLTXSwap is up and running in the near future, this will
                  be the best place to make your{' '}
                  <a className={globalClasses.text21 + ' ' + globalClasses.yellowText}>PLTX </a>
                  purchases.
                  <br />
                  <br />
                  <a className={globalClasses.text21 + ' ' + globalClasses.yellowText}>Rocket</a> has not yet to be
                  released, but it will be available for purchase before long. This will soon be followed by more tokens
                  in the PLUTEX ecosystem.
                </Typography>
              </Box>
              <Box display="flex" flexWrap="wrap" justifyContent="flex-start" alignItems="center" mb={9}>
                <Box mr={4} mb={1}>
                  <Typography className={globalClasses.text21 + ' ' + globalClasses.whiteText}>
                    See the Live Chart analytics:
                  </Typography>
                </Box>
                <Button title="PLTX" color="indigo" />
              </Box>
              <Box mb={5}>
                <Typography className={globalClasses.text21}>
                  At this point, there will be only a limited number of{' '}
                  <a className={globalClasses.text21 + ' ' + globalClasses.yellowText}>PLTX</a> tokens available – 200
                  million in total. But with the ROCKET token to follow and then more to add to the PLUTEX cosmos, this
                  is the right intergalactic ecosystem to have on your radar.
                </Typography>
              </Box>
              <Box mb={9} className={classes.buttonArea}>
                <Button title="BUY PLTX" color="yellow" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default BuySection
