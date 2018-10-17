import { componentStyles } from '../../../styles';
export const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: componentStyles.drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 0,
        [theme.breakpoints.up('sm')]: {
            width: 0,
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing.unit * 10,
        }
    },
    drawerContent: {
        display: 'flex',
        flexDirection: 'column',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
});
