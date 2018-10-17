import { componentStyles } from "../../../styles";

export const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        paddingLeft: theme.spacing.unit * 3,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: componentStyles.drawerWidth,
        width: `calc(100% - ${componentStyles.drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        // marginLeft: theme.spacing.unit
    },
})