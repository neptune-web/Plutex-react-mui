import React from 'react'
import { Element } from 'react-scroll'

// material ui core components
import { Box } from '@material-ui/core'

// core components
import Header from 'components/Header/Header'
import HeaderLinks from 'components/Header/HeaderLinks'
import Footer from 'components/Footer/Footer'
import HomeSection from 'pages/Home/HomeSection'
import EcosystemSection from 'pages/Home/EcosystemSection'
import BuySection from 'pages/Home/BuySection'
import PlutexSwapSection from 'pages/Home/PlutexSwapSection'
import LaunchPadSection from 'pages/Home/LaunchPadSection'
import CommunitySection from 'pages/Home/CommunitySection'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/homeStyle'
const useStyles = makeStyles(styles)

const Home = () => {
  const classes = useStyles()
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
        <Element id="home" name="home">
          <HomeSection />
        </Element>
        <Element id="ecosystem" name="ecosystem">
          <EcosystemSection />
        </Element>
        <Element id="buy" name="buy">
          <BuySection id="buy" />
        </Element>
        <Element id="plutexwap" name="plutexwap">
          <PlutexSwapSection id="plutexwap" />
        </Element>
        <Element id="launchpad" name="launchpad">
          <LaunchPadSection id="launchpad" />
        </Element>
        <Element id="community" name="community">
          <CommunitySection id="community" />
        </Element>
      </Box>
      <Footer />
    </Box>
  )
}

export default Home
