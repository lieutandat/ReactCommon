import  React from 'react'
import {Route, Redirect} from 'react-router-dom'

export const PrivateRoute = ({Component, path, isLogged, exact  = false}) => {
    return  <Route path={path} exact={exact}
    render={props => isLogged ? ( <Component {...props} />) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }}/>
      )
    }
  /> 
}