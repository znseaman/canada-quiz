import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import QuizContext from './context/QuizContext'
import quizReducer from './reducers/QuizReducer'
import initialState from './context/initialState'

const [state, dispatch] = useReducer(quizReducer, initialState)


ReactDOM.render(<QuizContext.Provider value={{ state, dispatch }}><App /></QuizContext.Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
