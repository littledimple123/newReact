import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import TodoList from './App';
import * as serviceWorker from './serviceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render( < TodoList / > , document.getElementById('root'));


serviceWorker.unregister();

if (module.hot) {
    module.hot.accept()
}