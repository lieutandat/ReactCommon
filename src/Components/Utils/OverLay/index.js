import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
    root: {
        position: 'Absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgb(222,212,202,0.8)',
        width: '100%',
        height: '100%',
        zIndex: '1000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#625f67'
    }
})

const OverLayComponent = (props) => {
    const { classes, text } = props
    return <div className={classes.root}>
        {
            text
        }
    </div>
}

export const OverLay = withStyles(styles)(OverLayComponent)