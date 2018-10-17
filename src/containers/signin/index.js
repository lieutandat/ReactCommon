import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { styles } from './style'
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { loginStartAction } from '../../redux/actions';


class SignInForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowPassword: false
        }
    }

    componentDidUpdate() {
        if(this.props.isLogged) {
            this.props.history.push('/home');
        }
    }

    showPassword = (event) => {
        event.stopPropagation(); 
        console.log(this.state.isShowPassword)
        this.setState((prev) => ({ isShowPassword: !prev.isShowPassword }))
    }
    onSignIn = (event) => {
        event.preventDefault();
        this.props.startLogin('username', 'password');
    }
    render() {
        const  showAdornment = (
            <InputAdornment position="start" onClick={this.showPassword}>
                <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.showPassword}
                >
                    {this.state.isShowPassword ? <Visibility /> :
                        <VisibilityOff />}
                </IconButton>
            </InputAdornment>
        )
        const { classes } = this.props;
        const {isShowPassword} = this.state
        return (
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockIcon />
                        </Avatar>
                        <Typography component="h1" variant="display1">
                            Sign in
                        </Typography>
                        <form className={classes.form} onSubmit={this.onSignIn}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input name="password" 
                                    id="password"
                                    type={isShowPassword ? "text" : "password"} 
                                    autoComplete="current-password"
                                    endAdornment={showAdornment} />
                            </FormControl>
                            <FormControlLabel control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                                Sign in
                            </Button>
                            <Button color="primary" fullWidth className={classes.submit} href="/signup">
                                Sign up
                            </Button>
                            <Button color="primary"  fullWidth className={classes.forgot} href="/signup">
                                Forgot Password ?
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}

SignInForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        isLogged: state.globalApp.authen.isLoggedIn,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: (username, password) => dispatch(loginStartAction(username, password))
    }
}

export const SignIn = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignInForm));