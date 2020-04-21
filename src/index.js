import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import MapContainer from './components/MapContainer';
import RestoList from "./components/RestoList";
//import {CommentsList} from "./components/CommentsList";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MapContainer />, document.getElementById('map'));
ReactDOM.render(<RestoList />, document.getElementById('list'));
//ReactDOM.render(<CommentsList />, document.getElementById('commentsBody'));


serviceWorker.unregister();
