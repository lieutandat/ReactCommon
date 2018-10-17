import { componentStyles } from "../../../styles";




export const styles = theme => {console.log(theme); return ({
    root: {
        flexGrow: 1,
        height: '99vh',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex'
    },
    hide: {
        display: 'none',
    },
    contentMarginTop: {
        marginTop: theme.mixins.toolbar.minHeight,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        overflowY: 'auto',
        overflowX: 'hidden',
        width: `calc(100vw - ${componentStyles.drawerWidth}px)`,
        minWidth: `calc(100vw - ${componentStyles.drawerWidth}px)`,
        [theme.breakpoints.up('sm')]: {
            width: `100vw`,
            MinWidth: `100vw`,
        },
    },
});}