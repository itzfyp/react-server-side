import React, { Fragment } from 'react';

const Home = () => (
    <Fragment>
        <div>I'm Very Best Home Component</div>
        <button onClick={() => console.log('Clicked Me!')}>Press  Me!</button>
    </Fragment>
);

export default {
    component: Home
};