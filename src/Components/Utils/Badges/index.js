import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Badge from '@material-ui/core/Badge';

const styles = theme => ({
    root: {
        // marginRight: theme.spacing.unit * 2
    },
    badgeTop: {
        left: `-5px`
    },
    badgeBottom: {
        top: `calc(100% - 20px)`
    },
    hide: {
        display: `none`
    }
})

// const BADGE_BOTTOM = 'bottom';
const DEFAULT_COLOR = 'secondary'

const BadgesComponent = (props) => {
    const { classes, children, count, color = DEFAULT_COLOR } = props
    // const badge = !count ? classes.hide :
    //     position === BADGE_BOTTOM ? classes.badgeBottom : {}
    return (
       !count ? <span classes={ { root: classNames(classes.root) }}>{children}</span> :
        <Badge classes={ { root: classNames(classes.root) }} children={children} badgeContent={count} color={color}/>
       
    )
    
}

const BadgesWrapperProps = withStyles(styles)(BadgesComponent);

export const BadgesWrapper = ({ classes, count, position, color, children }) => (
    <BadgesWrapperProps
        classes={classes}
        count={count}
        position={position}
        color={color}
        children={children} />
)


