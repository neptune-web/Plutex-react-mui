import React from 'react'

import { useHistory } from 'react-router-dom'

// nodejs library that concatenates classes
import classNames from 'classnames'

// material ui core components
import { AppBar, Button, Drawer, Hidden, Toolbar } from '@material-ui/core'

// @material-ui/icons
import MenuIcon from '@material-ui/icons/Menu'

// images
import brand from 'assets/images/logo.svg'

// import context variables
import { useNavigation } from 'hook/Context/NavigationContext'

// styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/components/Header/headerStyle'

const useStyles = makeStyles(styles)

const Header = props => {
  const { color, rightLinks, fixed, absolute } = props

  const classes = useStyles()
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  })

  const history = useHistory()

  // context variables
  const { navigation, setNavigation } = useNavigation()

  // variables
  const [mobileOpen, setMobileOpen] = React.useState(false)

  // handlers
  React.useEffect(() => {
    setMobileOpen(false)
  }, [navigation])

  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener('scroll', headerColorChange)
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener('scroll', headerColorChange)
      }
    }
  })
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props
    const windowsScrollTop = window.pageYOffset
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName('header')[0].classList.remove(classes[color])
      document.body.getElementsByTagName('header')[0].classList.add(classes[changeColorOnScroll.color])
    } else {
      document.body.getElementsByTagName('header')[0].classList.add(classes[color])
      document.body.getElementsByTagName('header')[0].classList.remove(classes[changeColorOnScroll.color])
    }
  }
  const brandComponent = (
    <Button className={classes.brand} onClick={() => handleGotoHome()}>
      <img src={brand} />
    </Button>
  )

  const handleGotoHome = () => {
    setNavigation('home')
    history.push('home')
  }
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {brandComponent}
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <Button color="inherit" className={classes.menuButton} aria-label="open drawer" onClick={handleDrawerToggle}>
            <MenuIcon className={classes.menuIcon} />
          </Button>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>{rightLinks}</div>
        </Drawer>
      </Hidden>
    </AppBar>
  )
}

export default Header
