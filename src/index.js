import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './style/style.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
// registerServiceWorker();