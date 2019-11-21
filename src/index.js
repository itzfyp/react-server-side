const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;
const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});

//create a server object:
app.listen(3000, () => {
  console.log('listening on port 3000');
}); //the server object listens on port 8080
