import React from 'react'
import classNames from 'classnames';
import Inbox from '@material-ui/icons/Inbox';
import Star from '@material-ui/icons/Star';
import Send from '@material-ui/icons/Send';
import Drafts from '@material-ui/icons/Drafts';
import Mail from '@material-ui/icons/Mail';
import Delete from '@material-ui/icons/Delete';
import Warning from '@material-ui/icons/Report';
import Exit from '@material-ui/icons/ExitToApp';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { BadgesWrapper } from '../Badges';
import { withStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom'

const styles = theme => ({
    open: {
        opacity: 1
    },
    hide: {
        transition: theme.transitions.create('opacity', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        opacity: 0
    },
    active: {
        borderRight: `2px solid ${theme.palette.action.active}`,
        backgroundColor: theme.palette.action.selected
    },
    navLink: {
        color: 'black',
        textDecoration: 'none !important'
    },
})

const MailBoxItem = (props) => {
    const { miniSize = false, classes } = props
    const items = [
        { text: 'Inbox', icon: <Inbox />, count: 0 },
        { text: 'Starred', icon: <Star />, count: 1, active: true },
        { text: 'Send mail', icon: <Send />, count: 1 },
        { text: 'Drafts', icon: <Drafts />, count: 1 }
    ]
    return items.map((item, index) => (
        <ListItem button key={index} className={classNames(item.active && classes.active)}>
            <ListItemIcon>
                <BadgesWrapper count={item.count}>
                    {
                        item.icon
                    }
                </BadgesWrapper>
            </ListItemIcon>
            <ListItemText primary={item.text} className={classNames(classes.open, miniSize && classes.hide)} />
        </ListItem>
    ))
}
export const MailBoxItems = withStyles(styles)(MailBoxItem)

const OtherMailBoxItemProps = (props) => {
    const items = [
        { text: 'All mail', icon: <Mail />, path: "" },
        { text: 'Trash', icon: <Delete />, path: "" },
        { text: 'Spam', icon: <Warning />, path: "" },
    ]
    const { miniSize = false, classes } = props
    return items.map((item, index) => (
        <NavLink strict to={item.path} key={index} activeClassName="selected" exact={true} className={classes.navLink}>
            <ListItem button >
                <ListItemIcon>
                    <BadgesWrapper count={item.count}>
                        {
                            item.icon
                        }
                    </BadgesWrapper>
                </ListItemIcon>
                <ListItemText primary={item.text} className={classNames(classes.open, miniSize && classes.hide)} />
            </ListItem>
        </NavLink>
    ))
}
export const OtherMailBoxItem = withStyles(styles)(OtherMailBoxItemProps)

const LogoutNavLinkComponent = ({ classes, miniSize, onClick }) => (
    <NavLink strict to={'/login'} activeClassName="selected" exact={true} className={classes.navLink} onClick={onClick}>
        <ListItem button >
            <ListItemIcon>
                <BadgesWrapper count={0}>
                    <Exit />
                </BadgesWrapper>
            </ListItemIcon>
            <ListItemText primary={'Logout'} className={classNames(classes.open, miniSize && classes.hide)} />
        </ListItem>
    </NavLink>
);
export const LogoutNavLink = withStyles(styles)(LogoutNavLinkComponent)