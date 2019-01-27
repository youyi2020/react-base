import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import './assets/globalStyle/reset.less'
import {Provider} from 'react-redux'
import configureStore from './redux/store'
const store = configureStore()
import { message } from 'antd';

message.config({
    top: 50,
    duration: 2,
    maxCount: 1,
});

ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>
    ,document.getElementById('root')
);

