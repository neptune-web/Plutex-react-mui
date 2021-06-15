import React from 'react'

// material ui core components
import { Box, LinearProgress, Typography } from '@material-ui/core'

// core components
import Button from 'components/Button/Button'

// images
import ICOPresaleCardImg from 'assets/images/Home/ICOPresaleCard.svg'
import BoardImg from 'assets/images/Home/Board.svg'

// styles
import { makeStyles, withStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/icoPresaleCardStyle'

const useStyles = makeStyles(styles)

const BorderLinearProgress = withStyles(() => ({
  root: {
    width: '100%',
    height: 14,
    borderRadius: 10,
    border: '3px solid #fff',
  },
  colorPrimary: {
    backgroundColor: '#fff',
  },
  bar: {
    height: 14,
    borderRadius: 7,
    backgroundImage: 'linear-gradient(90.11deg, #26E6DA 2.22%, #D0D337 99.97%)',
  },
}))(LinearProgress)

const ICOPresaleCard = () => {
  const classes = useStyles()

  return (
    <Box width={1} display="flex" justifyContent="center" className={classes.container}>
      <img src={ICOPresaleCardImg} className={classes.icoPresaleCard} />
      <Box className={classes.cardContent}>
        <Box width={1} display="flex" justifyContent="center">
          <Typography className={classes.title}>ICO PRE-SALE IS LIVE</Typography>
        </Box>
        <Box width={1} display="flex" justifyContent="center" mb={3}>
          <Typography className={classes.text20}>Round one ends in:</Typography>
        </Box>
        <Box width={1} display="flex" justifyContent="space-between" mb={3}>
          <Box>
            <Box display="flex" justifyContent="center">
              <Typography className={classes.text20}>Days</Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <img src={BoardImg} />
            </Box>
          </Box>
          <Box item xs={3}>
            <Box display="flex" justifyContent="center">
              <Typography className={classes.text20}>Hours</Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <img src={BoardImg} />
            </Box>
          </Box>
          <Box item xs={3}>
            <Box display="flex" justifyContent="center">
              <Typography className={classes.text20}>Minutes</Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <img src={BoardImg} />
            </Box>
          </Box>
          <Box item xs={3}>
            <Box display="flex" justifyContent="center">
              <Typography className={classes.text20}>Seconds</Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <img src={BoardImg} />
            </Box>
          </Box>
        </Box>
        <Box width={1} display="flex" justifyContent="center">
          <Typography className={classes.text20}>Hardcap:&nbsp;</Typography>
          <Typography className={classes.text22}>55 million PLTX</Typography>
        </Box>
        <Box width={1} display="flex" justifyContent="center" mb={3}>
          <Typography className={classes.text20}>Accepted currency:&nbsp;</Typography>
          <Typography className={classes.text22}>ETH</Typography>
        </Box>
        <Box width={1} display="flex" justifyContent="flex-start" mb={2}>
          <Typography className={classes.text20}>Tokens Sold:</Typography>
        </Box>
        <Box width={1} display="flex" justifyContent="flex-start" mb={2}>
          <BorderLinearProgress variant="determinate" value={85} />
        </Box>
        <Box width={1} display="flex" justifyContent="space-between" mb={5}>
          <Typography className={classes.text20}>89.5% target raised</Typography>
          <Typography className={classes.text22}>1 PLTX = 0.02 USD</Typography>
        </Box>
        <Box width={1} display="flex" justifyContent="space-between">
          <Button title="connect wallet" color="yellow" />
          <Button title="buy tokens" color="gray" />
        </Box>
      </Box>
    </Box>
  )
}

export default ICOPresaleCard
