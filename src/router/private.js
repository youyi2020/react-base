import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {message} from 'antd';
class Private extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){

    }

    render(){
        const { component: Component, ...rest} = this.props
        return (
            <Route
                {...rest}
                render={ (props) => {
                    if(!this.props.userToken || !this.props.userToken.token){
                        return <Redirect to={{pathname: "/login", state: {from: props.location}}} />
                    }else if (this.props.userToken.exp < Math.floor(Date.now() / 1000)){
                        message.error('登录过期');
                        return <Redirect to={{pathname: "/login", state: {from: props.location}}} />
                    } else{
                        return <Component {...props} />
                    }
                }
            } />
        );
    }
}

const mapStateToProps = state => {
    return {
        userToken : state.userToken
    }
};

export default connect(mapStateToProps)(Private)
