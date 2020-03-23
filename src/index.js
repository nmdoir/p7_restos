import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import MapContainer from './components/MapContainer';
import RestoList from "./components/RestoList";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MapContainer />, document.getElementById('map'));
ReactDOM.render(<RestoList />, document.getElementById('list'));

serviceWorker.unregister();
