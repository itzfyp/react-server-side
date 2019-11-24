// Startup point for the client side application
import 'babel-polyfill';
import React from 'react'
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './Routes';
import reducers from "./reducers";

const newAxios = axios.create({
    baseURL: '/api'
});


const store = createStore(reducers, window.INITAL_STATE, applyMiddleware(thunk.withExtraArgument(newAxios)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
);

ReactDom.hydrate(app, document.querySelector('#root'));