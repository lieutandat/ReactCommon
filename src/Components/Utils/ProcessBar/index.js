import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
    mainProcess: {
        margin: 0,
    }, 
    fixed: {
        position: 'fixed', 
        top: 0,
        left: 0,
        height: 2,
        width: '100%',
        zIndex: 100
    }
});

const CircularIndeterminate = (props) => {
    const { size, color = "primary", thickness = 7, variant = 'determinate', value, classes } = props
    return <div>
        <CircularProgress
            className={classes.progress}
            size={size}
            color={color}
            thickness={thickness}
            variant={variant}
            value={value}
        />
    </div>
}

/* For circle process
variant = {
    static, // not animation
    determinate, // always animation
}
*/
const CircularProcessProps = withStyles(styles)(CircularIndeterminate);
const CircularProcess = ({ classes, size, color, thickness, variant, value }) => (
    <CircularProcessProps
        classes={classes}
        size={size}
        color={color}
        thickness={thickness}
        variant={variant}
        value={value}
    />
)
// variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query';
const LinearIndeterminate = (props) => {
    const { color = "secondary", valueBuffer, variant, value, classes, position } = props
    return (
        <div className={position === 'fixed' ? classes.fixed : {}}>
            <LinearProgress color={color} variant={variant} value={value} valueBuffer={valueBuffer} />
        </div>
    );
}
const LineProcessProps = withStyles(styles)(LinearIndeterminate);
const LineProcess = ({ classes, color, variant, value, valueBuffer }) => (
    <LineProcessProps
        classes={classes}
        color={color}
        variant={variant}
        value={value}
        valueBuffer={valueBuffer}
    />
)

export {
    CircularProcess,
    LineProcess
}