import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../client/Routes';

export default (req, store) => {

    const app = (
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <Routes />
            </StaticRouter>
        </Provider>
    );

    const content = renderToString(app);

    return (`
        <html>
            <head>
                <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
                </body>
            </head>
        </html>
    `);
}