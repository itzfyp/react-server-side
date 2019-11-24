import React, { Fragment } from 'react';

const Home = () => (
    <Fragment>
        <div className="container center-align valign-wrapper" style={{ minHeight: 'calc(100vh - 64px)' }}>
            <div className="row">
                <div className="col">
                    <div className="">
                        <h1>Welcome to All</h1>
                        <p className="flow-text">This is aweasome React Server side page</p>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
);

export default {
    component: Home
};