import React from 'react'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Layout from './../layout'
import HomePage from './../pages/home'

export default class IRouter extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path='/'>
                        <Layout>
                            <Switch>
                                <Route exact path="/home" component={HomePage}></Route>
                            </Switch>
                        </Layout>
                    </Route>
                </Switch>
            </Router>
        )
    }
}