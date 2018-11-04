import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles';
import CardMedia from '../../Components/Utils/CardMedia'
import { LayoutWrapper } from '../../Components/Utils/LayoutWithSideNav';
import { theme } from '../../themes/themes';
import { LineProcess } from '../../Components/Utils/ProcessBar'
import { PrivateRoute } from '../../Components/Utils/PrivateRoute';
import { SignIn } from '../../containers/signin';
import { SimpleLineChart } from '../../Components/Utils/Chart';
import { Page404 } from '../../Components/Utils/404';
import './App.css'
import { logoutAction } from '../../redux/actions';
import { DynamicComponent } from '../initPage';

class App extends React.Component {

    onLogout = () => {
        this.props.onLogout();
    }
    mainPage = (header) => (<div>
        <LayoutWrapper header={header} onLogout={this.onLogout}>
            <CardMedia />
            <CardMedia />
        </LayoutWrapper>
    </div>)

    render() {
        const { isLogged } = this.props
        const { isLoading, loadingProcess } = this.props.loading
        const { title, header } = this.props.page
        return <React.Fragment>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <MuiThemeProvider theme={theme} >
                {
                    isLoading && <LineProcess value={loadingProcess} variant="determinate" />
                }
                <Router>
                    <Switch>
                        {/* <Route path="/" component={SignIn} exact={true}/> */}
                        <Route path="/login" component={SignIn} exact={true}/>
                        <Route path="/chart" component={SimpleLineChart} exact={true} />
                        <Route path="/dynamic" component={DynamicComponent} exact={true}/>
                        <PrivateRoute path="/" Component={() => this.mainPage(header)} isLogged={isLogged} />
                        <Route path="**" component={Page404} exact={true} />
                    </Switch>
                </Router>
            </MuiThemeProvider>
        </React.Fragment>
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.globalApp.loading,
        error: state.globalApp.error,
        page: state.globalApp.page,
        isLogged: state.globalApp.authen.isLoggedIn,
    }
}

const mapDispatchToProps = (dispatch) => ({
    onLogout: () => dispatch(logoutAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)