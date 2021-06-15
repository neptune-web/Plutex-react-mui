import React from 'react'

// material ui core components
import { Button } from '@material-ui/core'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Button/buttonStyle'

const useStyles = makeStyles(styles)

const PTButton = props => {
  const { title, color } = props
  const classes = useStyles()

  return <Button className={color === 'yellow' ? classes.yellowButton : classes.grayButton}>{title}</Button>
}

export default PTButton
