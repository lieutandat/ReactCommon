import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import classNames from 'classnames';
import { styles } from './styles'

const DrawerComponent = (props) => {
    const { children, classes, opened, Avata } = props
    return <Drawer
        variant="permanent"
        classes={{
            paper: classNames(classes.drawerPaper, !opened && classes.drawerPaperClose),
        }}
        open={opened}
        ModalProps={{
            keepMounted: true, // Better open performance on mobile.
        }}
    >
        <div className={classes.toolbar}>
           { Avata && <Avata />}
        </div>
        <div className={classes.drawerContent}>
            {
                children
            }
        </div>
    </Drawer>
}
export const SideNav = withStyles(styles)(DrawerComponent)
