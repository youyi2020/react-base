/**
 * Reducer 数据处理
 */
import {type} from './../action'

const initialState = {
    userToken        :   null
};

const initialStoreState = JSON.parse(window.localStorage.getItem('user_token')) || initialState;

export default (state = initialStoreState,action)=> {
    switch (action.type){

        case type.USERTOKEN:{
            let newState = {
                ...state,
                userToken:action.userToken
            };
            window.localStorage.setItem('user_token',JSON.stringify(newState));
            return newState;
        }

        default:{
            return {
                ...state
            };
        }
        
    }
}