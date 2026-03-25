import 'zone.js/node';
import express from 'express';
import render from './main.server';

const app = express();

app.get('*', async (req, res) => {
  const html = await render(req.url, '<app-root></app-root>');
  res.send(html);
});

app.listen(4000, () => {
  console.log('SSR server running on http://localhost:4000');
});

