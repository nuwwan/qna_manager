// src/index.ts
import express from 'express';
import proxy from 'express-http-proxy'

const app = express();
const port = 8000;

app.use('/qna_engine',proxy('http://localhost:8003'))
app.use('/qna_admin',proxy('http://localhost:8002'))
app.use('/moderator',proxy('http://localhost:8001'))

app.get('/', (req, res) => {
  res.send('Hello, from gateway!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});