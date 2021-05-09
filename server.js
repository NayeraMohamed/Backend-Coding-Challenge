const express = require('express');
const app = express();

const LanguagesRouter = require('./server/routes/languages');

app.use('/languages', LanguagesRouter);

app.get('/', (req, res) => {
  res.send('Hello there!')
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));