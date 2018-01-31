import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
