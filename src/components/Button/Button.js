import React from 'react'

// material ui core components
import { Button } from '@material-ui/core'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Button/buttonStyle'

const useStyles = makeStyles(styles)

const PTButton = props => {
  const { title } = props
  const classes = useStyles()

  return <Button className={classes.button}>{title}</Button>
}

export default PTButton
