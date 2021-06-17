import React from 'react'

// material ui core components
import { Box, Grid, InputBase, Typography } from '@material-ui/core'

// core components
import Button from 'components/Button/Button'

// images
import PlanetDecorationImage from 'assets/images/Home/PlanetDecoration.png'
import GalaxyPlanetImage from 'assets/images/Home/GalaxyPlanet.png'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/communitySectionStyle'
import globalStyles from 'assets/jss/PLUTEX'
const useStyles = makeStyles(styles)
const useGlobalStyles = makeStyles(globalStyles)

const CommunitySection = () => {
  const classes = useStyles()
  const globalClasses = useGlobalStyles()
  return (
    <Box className={classes.plutexSwapSectionArea}>
      <img src={PlanetDecorationImage} className={classes.planetDecoration} />
      <Box className={classes.container}>
        <Box className={classes.content}>
          <Grid container display="flex" justify="flex-start">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box className={globalClasses.text40Area} mb={5}>
                <Typography className={globalClasses.text40}>#COMMUNITY</Typography>
              </Box>
              <Box className={classes.textContentArea}>
                <Typography className={globalClasses.text21}>
                  If you&apos;d like to donate to the Devs, send ETH, SHIB or LEASH here. Thank you for your support!
                  WOOF!
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center" mb={6}>
                <InputBase
                  className={classes.inputArea}
                  defaultValue="0xc351155C80aCD043BD5F8FE7ffc8536af1fF9375"
                  inputProps={{ 'aria-label': 'naked' }}
                />
              </Box>
              <Box className={classes.textContentArea}>
                <Typography className={globalClasses.text21}>
                  Our community keeps growing everyday. Please join our social platforms to get updates using the links
                  below. There are 150k+ people in our different groups!
                  <br />
                  <br />
                  You can connect with us from anywhere in the world because we have international groups for foreign
                  language speakers.
                </Typography>
              </Box>
              <Box width={1} display="flex" justifyContent="center">
                <Grid container display="flex" justify="center">
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Box display="flex" justifyContent="center" m={1}>
                      <Button title="SHIB TELEGRAM" color="indigo" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Box display="flex" justifyContent="center" m={1}>
                      <Button title="TWITTER" color="indigo" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Box display="flex" justifyContent="center" m={1}>
                      <Button title="DISCORT" color="indigo" />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <img src={GalaxyPlanetImage} className={classes.galaxyPlanet} />
    </Box>
  )
}

export default CommunitySection
