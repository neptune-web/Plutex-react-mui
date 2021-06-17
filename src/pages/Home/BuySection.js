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
const useStyles = makeStyles(styles)

const BuySection = () => {
  const classes = useStyles()
  return (
    <Box className={classes.buySectionArea}>
      <img src={StarLightImage} className={classes.starLightArea} />
      <Box className={classes.container}>
        <Grid container display="flex" justify="space-between">
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Box display="flex" justifyContent="center" mb={4.5}>
              <img src={FoxImage} className={classes.foxImage} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Box className={classes.buyTitleArea}>
              <Typography className={classes.buyTitle}>#HOW TO BUY</Typography>
            </Box>
            <Box mb={5}>
              <Typography className={classes.text21}>
                The only place to buy or sell <a className={classes.text21 + ' ' + classes.yellowText}>PLTX</a> or{' '}
                <a className={classes.text21 + ' ' + classes.yellowText}>LOREM IPSUM</a> safely is on Uniswap. There are
                some centralized exchanges that have listed SHIB, but CEXs have a history of locking funds. If you can,
                it is safer to trade on a decentralized exchange like Uniswap or 1inch.
                <br />
                <br />
                <a className={classes.text21 + ' ' + classes.yellowText}>LOREM IPSUM</a> IS NOT AVAILABLE YET, BUT WILL
                BE ABLE TO ACQUIRE SOON.
              </Typography>
            </Box>
            <Box display="flex" flexWrap="wrap" justifyContent="flex-start" alignItems="center" mb={9}>
              <Box mr={4} mb={3}>
                <Typography className={classes.text21 + ' ' + classes.whiteText}>
                  See the Live Chart analytics:
                </Typography>
              </Box>
              <Button title="PLTX" color="indigo" />
            </Box>
            <Box mb={9} className={classes.buttonArea}>
              <Button title="BUY PLTX" color="yellow" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default BuySection
