import React from 'react';
import ReactDOM from 'react-dom';
import './fonts/Inconsolata-Light.ttf'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
