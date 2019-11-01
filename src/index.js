import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const listReducer = (state = [], action) => {
    if (action.type === 'ADD_LIST') {
        return  action.payload;
    }
    return state
}
const formReducer = (state = [], action) => {
    if (action.type === 'ADD_FORM') {
        return action.payload;
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        formReducer, 
        listReducer 
    }),    
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));