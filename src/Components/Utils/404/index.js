import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Input, InputAdornment, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import image from '../../../assest/images/404.png'
const styles = theme => ({
    layout: {
        width: '100vw',
        height: '100vh',
        display: 'block', // Fix IE11 issue.
        alignItems: 'center',
        textAlign:'center',
        // background: '#ad5389', /* fallback for old browsers */
        // background: '-webkit-linear-gradient(to right, #ad5389, #3c1053)', /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #ad5389, #3c1053)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    },
    paper: {
        margin: 'auto',
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        border: '2px solid black',
        borderRadius: '2px',
        flexDirection: 'column',
        paddingLeft: theme.spacing.unit * 4,
        paddingRight: theme.spacing.unit * 4,
        alignItems: 'center',
        backgroundImage: image,
        [theme.breakpoints.down('sm')]: {
            width: '60vw',
          },
          [theme.breakpoints.up('md')]: {
            width: '80vw',
          },
          [theme.breakpoints.up('lg')]: {
            width: '400px',
          },
    },
})
// 'headline","title","subheading","body2","body1","caption"
const Page404Props = ({classes}) => {
    const searchAdronment = <InputAdornment position="end"><SearchIcon/></InputAdornment>
    return ( <div className={classes.layout}>
             <Typography component="h1" variant="display2" >
                404
            </Typography>
             <Typography component="h1" variant="display1">
                          Oops! The Page you requested was not found!
            </Typography>
            <Card className={classes.paper}>
                <CardContent>
                        you can go to home page or search here
                    <Input type="text" fullWidth={true}  variant="outlined" endAdornment={searchAdronment}/>
                </CardContent>
            </Card>
        </div>
    )
}

export const Page404 = withStyles(styles)(Page404Props)