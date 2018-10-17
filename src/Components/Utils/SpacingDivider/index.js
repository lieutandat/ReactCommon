import React from 'react'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    base: {
        width: `100%`,
        marginTop: theme.spacing.unit * 3
    }
})
 
const Spacing = ({classes}) => {
    return <div className={classNames(classes.base)}/>
}

export const SpacingDivider = withStyles(styles)(Spacing);