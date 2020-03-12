import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import MapContainer from './components/MapContainer';
import * as serviceWorker from './serviceWorker';

let map = new MapContainer(Component);
map.getGeoLocation();

ReactDOM.render(<MapContainer />, document.getElementById('root'));

serviceWorker.unregister();
