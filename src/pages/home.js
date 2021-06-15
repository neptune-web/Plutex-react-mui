import React from 'react'

// material ui core components
import { Box } from '@material-ui/core'

// core components
import Header from 'components/Header/Header'
import HeaderLinks from 'components/Header/HeaderLinks.js'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home'
const useStyles = makeStyles(styles)

const Home = () => {
  const classes = useStyles()
  return (
    <Box display="flex" justifyContent="center" className={classes.body}>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'white',
        }}
      />
    </Box>
  )
}

export default Home
