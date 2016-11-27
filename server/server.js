const express = require('express');
const app = express();
const router = require('./routes');
const parser = require('body-parser');

app.use(parser.json());

app.set('port', process.env.PORT);

app.use('/', router);
app.use(express.static(`${__dirname}/../client`));

app.listen(3000);



console.log(`listening on port 3000`);

module.exports = app;