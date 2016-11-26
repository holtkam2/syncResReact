const express = require('express');
const app = express();
const router = require('./routes');

app.set('port', process.env.PORT);

app.use('/', router);
app.use(express.static(`${__dirname}/../client`));

app.listen(3000);



console.log(`listening on port 3000`);

module.exports = app;