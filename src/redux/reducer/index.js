/**
 * Reducer 数据处理
 */
import {type} from './../action'


const initialState = {
    userToken        :   '12312313'
};

// let initSession = window.sessionStorage.getItem(AUTH_SESSION) || JSON.stringify(initialState);
// const initialStoreState = JSON.parse(initSession);

export default (state = initialState,action)=> {
    switch (action.type){

        case type.USERTOKEN:{
            let newState = {
                ...state,
                userToken:action.userToken
            };
            return newState;
        }

        default:{
            return {
                ...state
            };
        }
        
    }
}