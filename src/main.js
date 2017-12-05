/**
 * Created by wangbo on 17/12/4.
 */
'use strict'
//注意！这里引入了新的东西
import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import Component from './components'
let main = function(){
    render(<Component />,document.getElementById('app'));
};
main();