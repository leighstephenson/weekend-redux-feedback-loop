import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';

//feeling - understanding - support - comments > review

const feeling= (state = '', action) => {
    if (action.type === 'SET_FEELING') {
        //changes the value of reducer
        return action.payload;
    }
    return state;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
