/**
 * Created by wangbo on 17/12/4.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/component'
import './components/base.less'

var oDiv = document.querySelector("#app");
ReactDOM.render(<Hello />, oDiv);
