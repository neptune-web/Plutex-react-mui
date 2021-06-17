import React from 'react'

// material ui core components
import { Box, Grid, Typography } from '@material-ui/core'

// core components

// images
import MoonImage from 'assets/images/Home/Moon.png'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/plutexSwapSectionStyle'
const useStyles = makeStyles(styles)

const PlutexSwapSection = () => {
  const classes = useStyles()
  return (
    <Box className={classes.plutexSwapSectionArea}>
      <img src={MoonImage} className={classes.moon} />
      <Box className={classes.container}>
        <Box className={classes.content}>
          <Grid container display="flex" justify="flex-start">
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Box className={classes.buyTitleArea}>
                <Typography className={classes.buyTitle}>#PLUTEXSWAP</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default PlutexSwapSection
