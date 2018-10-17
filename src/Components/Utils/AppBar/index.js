import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import classNames from 'classnames';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles'

// 'fixed' | 'absolute' | 'sticky' | 'static';
const AppBarComponent = (props) => {
    const { classes, position = "absolute", color = "inherit", hasDrawer, opened, handleDrawerOpen, title } = props
    return <AppBar
        position={position}
        className={classNames(classes.appBar, hasDrawer && opened && classes.appBarShift)}
    >
        <Toolbar disableGutters={!opened}>
            {
                hasDrawer && <IconButton color={color} aria-label="Open drawer" onClick={handleDrawerOpen}
                    className={classNames(classes.menuButton)}
                >
                    {opened ? <ChevronLeftIcon /> : <MenuIcon />}
                </IconButton>
            }
            <Typography variant="title" color={color} noWrap>
                {
                    title
                }
            </Typography>
        </Toolbar>
    </AppBar>
}

export const AppNavBar = withStyles(styles)(AppBarComponent)