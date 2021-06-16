import React from 'react'

// material ui core components
import { Box } from '@material-ui/core'

// core components
import Header from 'components/Header/Header'
import HeaderLinks from 'components/Header/HeaderLinks'
import Footer from 'components/Footer/Footer'
import HomeSection from 'pages/Home/HomeSection'

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
        <HomeSection />
        <Box className={classes.container}></Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Home
