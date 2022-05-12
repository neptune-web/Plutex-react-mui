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
                  If you would like to make a donation to the growing PLUTEX community, please send your ETH or PLTX
                  here. We are hugely grateful to everyone who supports and believes in the PLUTEX project, and we won’t
                  forget you when we have achieved galactic domination.
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
                  It is early on in the PLUTEX intergalactic journey, and there are still many asteroids to avert and
                  alien invaders to battle against. This is why we place so much value on the community that makes us
                  who we are. Every member of the network makes an important contribution, and it is through this spirit
                  of community-building that we will establish strength in the PLTX coin and ecosystem. PLUTEX is soon
                  to become the next big name in the crypto universe, and we invite all adventurous space travelers to
                  join us on our mission.
                  <br />
                  <br />
                  We are a growing community, and there are no limits to our galactic growth. Connect with us at any
                  time through the social media platforms below.
                  <br />
                  <br />
                  We are a global community that welcomes contributors from any corner of planet Earth, and we also
                  strive to provide groups and support for different human languages. We have yet to develop language
                  support for any alien languages, but we are working on this, so watch this space!
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
