/**
 * Created by web-01 on 2017/11/15.
 */
//const hello = require('./hello');
//document.querySelector('#root').appendChild(hello());

import React from 'react';
import {render} from 'react-dom';
import Hello from './Hello';
import './style.css';

render(<Hello />, document.getElementById('root'));