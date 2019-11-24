import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return <h4 className="center-align">Oooops, Route not found.</h4>
};

export default {
    component: NotFoundPage
}