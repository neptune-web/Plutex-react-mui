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

  return (
    <React.Fragment>
      {color === 'yellow' ? <Button className={classes.button + ' ' + classes.yellowColor}>{title}</Button> : null}
      {color === 'gray' ? <Button className={classes.button + ' ' + classes.grayColor}>{title}</Button> : null}
      {color === 'indigo' ? <Button className={classes.button + ' ' + classes.indigoColor}>{title}</Button> : null}
    </React.Fragment>
  )
}

export default PTButton
