import React from 'react'

// material ui core components
import { Box, Grid, Hidden, Typography } from '@material-ui/core'

// core components
import Header from 'components/Header/Header'
import HeaderLinks from 'components/Header/HeaderLinks'
import Button from 'components/Button/Button'
import ICOPresaleCard from 'pages/Presale/ICOPresaleCard'
import Footer from 'components/Footer/Footer'

// images
import Stones01 from 'assets/images/Presale/Stones01.png'
import Planet from 'assets/images/Presale/Planet.png'
import Stones02 from 'assets/images/Presale/Stones02.png'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Presale/presaleStyle'
import globalStyles from 'assets/jss/PLUTEX'
const useStyles = makeStyles(styles)
const useGlobalStyles = makeStyles(globalStyles)

const Presale = () => {
  const classes = useStyles()
  const globalClasses = useGlobalStyles()
  return (
    <Box display="block" justifyContent="center" alignItems="flex-start">
      <Header
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'white',
        }}
      />
      <Box className={classes.body}>
        <Box className={classes.container}>
          <Grid container>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Hidden smDown implementation="css">
                  <img src={Stones01} />
                </Hidden>
              </Box>
            </Grid>
          </Grid>
          <Grid container justify="space-between">
            <Grid item xs={12} md={12} lg={6}>
              <Box display="block" justifyContent="flex-start">
                <Typography className={classes.title}>#PLTX JUST ARRIVED</Typography>
                <Box className={classes.mt30}>
                  <Typography className={globalClasses.text21}>
                    The new coin from planet PLUTEX has just landed and is ready to send out some cosmic waves in the
                    crypto world! PLTX is the new space token that is about to take the galaxy by astro-storm: a new,
                    decentralized cryptocurrency with an ecosystem to empower each individual user. PLUTEX has a robust
                    system of tokenomics, as well as a clear plan for cultivating interest in the brand and maintaining
                    a high level of liquidity.
                  </Typography>
                </Box>
                <Box className={classes.mt30}>
                  <Typography className={globalClasses.text21}>
                    In cryptocurrency, it is all-important for investors to bank on a safe bet early on in development.
                    PLTX is a promising space coin that is going to some out-of-this-world locations. Make sure you are
                    down for the PLUTEX project before it takes off!
                  </Typography>
                </Box>
                <Box className={classes.my50}>
                  <Button title="white paper" color="yellow" />
                </Box>
              </Box>
            </Grid>
            <Hidden mdUp implementation="css">
              <img src={Stones01} />
            </Hidden>
            <Grid item xs={12} md={12} lg={5}>
              <Box width={1} display="flex" justifyContent="center">
                <ICOPresaleCard />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Hidden xsDown implementation="css">
          <Grid container display="flex" justify="space-between">
            <Grid item xs={6} md={6} lg={6}>
              <Box display="flex" justifyContent="flex-end">
                <img src={Planet} className={classes.imgStyle} />
              </Box>
            </Grid>
            <Grid item xs={6} md={5} lg={4}>
              <Box width={1} display="flex" justifyContent="flex-end">
                <img src={Stones02} className={classes.imgStyle} />
              </Box>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden smUp implementation="css">
          <Grid container>
            <Grid item xs={12} md={6} lg={6}>
              <Box width={1} display="flex" justifyContent="flex-start">
                <img src={Stones02} className={classes.imgStyle} />
              </Box>
            </Grid>
            <Grid item xs={11} md={6} lg={6}>
              <Box display="flex" justifyContent="flex-end">
                <img src={Planet} className={classes.imgStyle} />
              </Box>
            </Grid>
          </Grid>
        </Hidden>
      </Box>
      <Footer />
    </Box>
  )
}

export default Presale
