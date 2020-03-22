import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import MapContainer from './components/MapContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MapContainer />, document.getElementById('map'));

serviceWorker.unregister();
