import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';

const drawerWidth = 240;

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
        backgroundColor: theme.palette.secondary.secondary,
        opacity: 0.7,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    toolbar: theme.mixins.toolbar
});

const DrawerComponent = (props) => {
    const { anchor = 'left', open, children, classes, key } = props
    return (
        <Drawer
            variant="persistent"
            classes={{ paper: open ? classes.drawerPaper : undefined}}
            anchor={anchor}
            open={open}
            key={key}
        >
            <Toolbar>
                <div className={classes.toolbar}>
                    {
                        children
                    }
                </div>
            </Toolbar>
        </Drawer>)
}

const SideNavProps = withStyles(styles)(DrawerComponent)
export const SideNav = ({ anchor, children, classes, open = true }) => (
    <SideNavProps anchor={anchor} children={children} classes={classes} open={open} />
)