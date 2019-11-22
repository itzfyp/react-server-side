import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  const html = `
    <html>
      <head>
        <body>
          <div id="root">${content}</div>
          <script src="bundle.js"></script>
        </body>
      </head>
    </html>
  `;

  res.send(html);
});

//create a server object:
app.listen(3000, () => {
  console.log('listening on port 3000');
}); //the server object listens on port 8080

