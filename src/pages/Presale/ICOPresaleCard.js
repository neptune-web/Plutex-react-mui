import React from 'react'

// material ui core components
import { Box, Hidden, LinearProgress, Typography } from '@material-ui/core'

// core components
import Button from 'components/Button/Button'

// images
import ICOPresaleCardImg from 'assets/images/Presale/ICOPresaleCard.svg'
import BoardImg from 'assets/images/Presale/Board.svg'

// styles
import { makeStyles, withStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Presale/icoPresaleCardStyle'

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

  // variables
  const [presaleEndTime, setPresaleEndTime] = React.useState(0)
  const [now, setNow] = React.useState(0)
  const [displayEndTime, setDisplayEndTime] = React.useState({
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
  })

  React.useEffect(() => {
    setPresaleEndTime(1626794093628)
    setNow(Date.now())
  }, [])

  React.useEffect(() => {
    let count = 0
    if (presaleEndTime !== 0 && now !== 0) {
      setInterval(() => {
        let obj = {}
        var delta = Math.abs(presaleEndTime - now - count * 1000) / 1000
        var days = Math.floor(delta / 86400)
        obj.days = days
        delta -= days * 86400
        var hours = Math.floor(delta / 3600) % 24
        obj.hours = hours
        delta -= hours * 3600
        var minutes = Math.floor(delta / 60) % 60
        obj.minutes = minutes
        delta -= minutes * 60
        var seconds = Math.floor(delta % 60)
        obj.seconds = seconds
        let temp = {}
        if (obj.days > 9) {
          temp.days = obj.days.toString()
        } else {
          temp.days = '0' + obj.days.toString()
        }
        if (obj.hours > 9) {
          temp.hours = obj.hours.toString()
        } else {
          temp.hours = '0' + obj.hours.toString()
        }
        if (obj.minutes > 9) {
          temp.minutes = obj.minutes.toString()
        } else {
          temp.minutes = '0' + obj.minutes.toString()
        }
        if (obj.seconds > 9) {
          temp.seconds = obj.seconds.toString()
        } else {
          temp.seconds = '0' + obj.seconds.toString()
        }
        setDisplayEndTime(temp)
        count++
      }, 1000)
    }
  }, [presaleEndTime, now])

  return (
    <Box width={1} display="flex" justifyContent="center" className={classes.container}>
      <Hidden smDown implementation="css">
        <img src={ICOPresaleCardImg} className={classes.icoPresaleCard} />
      </Hidden>
      <Hidden mdUp implementation="css">
        <Box className={classes.pinkBG}></Box>
      </Hidden>
      <Box className={classes.cardContent}>
        <Box width={1} display="flex" justifyContent="center">
          <Typography className={classes.title}>ICO PRE-SALE IS LIVE</Typography>
        </Box>
        <Box width={1} display="flex" justifyContent="center" mb={3}>
          <Typography className={classes.text20}>Round one ends in:</Typography>
        </Box>
        <Box width={1} display="flex" justifyContent="space-between" mb={3}>
          <Box>
            <Box display="flex" justifyContent="center" mb={1}>
              <Typography className={classes.text20}>Days</Typography>
            </Box>
            <Box className={classes.boardImageArea}>
              <img src={BoardImg} className={classes.boardImg} />
              <Box width={1 / 2} className={classes.boardContent}>
                <Typography className={classes.text24}>{displayEndTime.days[0]}</Typography>
              </Box>
              <Box width={1 / 2} className={classes.boardContent}>
                <Typography className={classes.text24}>{displayEndTime.days[1]}</Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="flex" justifyContent="center" mb={1}>
              <Typography className={classes.text20}>Hours</Typography>
            </Box>
            <Box className={classes.boardImageArea}>
              <img src={BoardImg} className={classes.boardImg} />
              <Box width={1 / 2} className={classes.boardContent}>
                <Typography className={classes.text24}>{displayEndTime.hours[0]}</Typography>
              </Box>
              <Box width={1 / 2} className={classes.boardContent}>
                <Typography className={classes.text24}>{displayEndTime.hours[1]}</Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="flex" justifyContent="center" mb={1}>
              <Typography className={classes.text20}>Minutes</Typography>
            </Box>
            <Box className={classes.boardImageArea}>
              <img src={BoardImg} className={classes.boardImg} />
              <Box width={1 / 2} className={classes.boardContent}>
                <Typography className={classes.text24}>{displayEndTime.minutes[0]}</Typography>
              </Box>
              <Box width={1 / 2} className={classes.boardContent}>
                <Typography className={classes.text24}>{displayEndTime.minutes[1]}</Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="flex" justifyContent="center" mb={1}>
              <Typography className={classes.text20}>Seconds</Typography>
            </Box>
            <Box className={classes.boardImageArea}>
              <img src={BoardImg} className={classes.boardImg} />
              <Box width={1 / 2} className={classes.boardContent}>
                <Typography className={classes.text24}>{displayEndTime.seconds[0]}</Typography>
              </Box>
              <Box width={1 / 2} className={classes.boardContent}>
                <Typography className={classes.text24}>{displayEndTime.seconds[1]}</Typography>
              </Box>
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
          <BorderLinearProgress variant="determinate" value={89.5} />
        </Box>
        <Box width={1} display="flex" justifyContent="space-between" mb={5}>
          <Typography className={classes.text20}>89.5% target raised</Typography>
          <Typography className={classes.text22}>1 PLTX = 0.02 USD</Typography>
        </Box>
        <Box width={1} display="flex" justifyContent="space-between">
          <Button title="connect wallet" color="yellow" />
          <Box ml={1}>
            <Button title="buy tokens" color="gray" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ICOPresaleCard
