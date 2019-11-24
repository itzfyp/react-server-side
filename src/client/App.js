import React, { Fragment } from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './actions';

const App = ({ route }) => {
    return <Fragment>
        <Header />
        {renderRoutes(route.routes)}
    </Fragment>
};

export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};