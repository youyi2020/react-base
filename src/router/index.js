import React from 'react'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import PrivateRoute from './private.js'
import Layout from './../layout/index.js'
import HomePage from './../pages/home/index.js'
import LoginPage from './../pages/login/index.js'
import RegisterPage from './../pages/register/index.js'
class IRouter extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path='/'>
                        <Layout>
                            <Switch>
                                <Route exact path="/login" component={LoginPage} />  
                                <Route exact path="/register" component={RegisterPage} />
                                <PrivateRoute path="/home" component={HomePage} />
                                <Redirect to="/home" />
                            </Switch>
                        </Layout>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default IRouter;