import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

//feeling - understanding - support - comments > review

const feeling = (state = '', action) => {
    if (action.type === 'SET_FEELING') {
        //changes the value of reducer
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return 0
    };
    return state
};

const understanding = (state = '', action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return 0
    };
    return state
};

const support = (state = '', action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return 0
    };
    return state
};

const comments = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return ''
    };
    return state
};

const storeInstance = createStore(
    combineReducers(
        {
            feeling,
            understanding,
            support,
            comments,
            //TODO Add reducers here
        }
    ),
    applyMiddleware(logger)

)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
