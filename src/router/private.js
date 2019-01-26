import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

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
                    if(this.props.userToken.length){
                        return <Component {...props} />
                    }else{
                        return <Redirect to={{pathname: "/login", state: {from: props.location}}} />
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
