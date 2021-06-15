import React from 'react'

// material ui core components
import { Box, Grid } from '@material-ui/core'

// core components
import Header from 'components/Header/Header'
import HeaderLinks from 'components/Header/HeaderLinks'
import Button from 'components/Button/Button'
import ICOPresaleCard from 'pages/Home/ICOPresaleCard'
import Footer from 'components/Footer/Footer'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/homeStyle'
import { Typography } from '@material-ui/core'
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
        <Box className={classes.container}>
          <Grid container>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Box className={classes.stone01Area}></Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container justify="space-between">
            <Grid item xs={12} md={6} lg={6}>
              <Box display="block" justifyContent="flex-start">
                <Typography className={classes.title}>#PLTX JUST ARRIVED</Typography>
                <Box className={classes.mt30}>
                  <Typography className={classes.content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu libero enim. Etiam rutrum eu arcu ut
                    sagittis. Sed dictum lorem ex, ut eleifend sem imperdiet sit amet. Fusce tincidunt mi lacus, non
                    iaculis leo aliquam vel. Phasellus vestibulum est a nunc suscipit, a tincidunt nunc tincidunt.
                  </Typography>
                </Box>
                <Box className={classes.mt30}>
                  <Typography className={classes.content}>
                    Pellentesque eget quam condimentum tortor tristique posuere. Quisque lobortis pellentesque felis, id
                    viverra nunc condimentum at. Phasellus viverra lacinia dui, a vulputate eros luctus ultricies.
                  </Typography>
                </Box>
                <Box className={classes.mt50}>
                  <Button title="white paper" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
              <ICOPresaleCard />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Home
