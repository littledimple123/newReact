import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Clock from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < Clock / > , document.getElementById('root'));


serviceWorker.unregister();

if (module.hot) {
    module.hot.accept()
}