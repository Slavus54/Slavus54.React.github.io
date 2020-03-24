import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {State} from './context/State';

const app = (
    <State>
        <App />
    </State>
);

ReactDOM.render(app, document.getElementById('germany'));