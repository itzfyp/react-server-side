import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from "../client/reducers";

export default (req) => {
    const newAxios = axios.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: {
            cookie: req.get('cookie') || ''
        }
    });
    const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(newAxios)));

    return store;
};