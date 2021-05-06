const express = require('express');
const app = express();

const RepositoriesRouter = require('./server/routes/repositories');

app.use('/repositories', RepositoriesRouter);

app.get('/', (req, res) => {
  res.send('Hello there!')
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));