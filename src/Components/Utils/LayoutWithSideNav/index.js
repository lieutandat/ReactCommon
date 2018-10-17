import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import List from '@material-ui/core/List';
import { OtherMailBoxItem, MailBoxItems, LogoutNavLink } from '../ItemList'
import { SideNav } from '../Drawer'
import { ImageAvatar } from '../Avatar';
import { styles } from './styles'
import { SpacingDivider } from '../SpacingDivider';
import { AppNavBar } from '../AppBar';

class Layout extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState(prev => ({ open: !prev.open }));
    };

    render() {
        const { classes, children, header = 'Mini variant drawer', onLogout} = this.props;
        const openedAppBar = true;
        return (
            <div className={classes.root}>
                <AppNavBar opened={this.state.open} hasDrawer={true}  handleDrawerOpen={this.handleDrawerOpen} title={header}/>
                <SideNav opened={this.state.open} Avata={ImageAvatar}>
                    <List component="nav">
                        <MailBoxItems miniSize={!this.state.open} />
                        <SpacingDivider />
                        <OtherMailBoxItem miniSize={!this.state.open} />
                        <LogoutNavLink onClick={onLogout} miniSize={!this.state.open}/>
                    </List>
                </SideNav>
                <main className={classNames(classes.content, openedAppBar && classes.contentMarginTop)}>
                   {
                       children
                   }
                </main>
            </div>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export const LayoutWrapper =  withStyles(styles, { withTheme: true })(Layout);