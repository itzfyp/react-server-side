import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';

import Routes from '../client/Routes';

export default (req, store, context) => {

    const app = (
        <Provider store={store}>
            <StaticRouter location={req.path} context={context} >
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    const content = renderToString(app);

    return (`
        <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITAL_STATE=${serialize(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `);
}