import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import App from './App';

const app = express();

app.use(express.static('public'));

app.get('*', async (req, res) => {
  try {
    const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
    const employees = response.data.data;

    const appString = ReactDOMServer.renderToString(<App employees={employees} />);

    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with React</title>
      </head>
      <body>
        <div id="root">${appString}</div>
        <script>
          window.__INITIAL_DATA__ = ${JSON.stringify(employees)};
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;

    res.send(html);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
