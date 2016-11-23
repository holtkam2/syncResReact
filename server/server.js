const express = require('express');
const app = express();

app.set('port', process.env.PORT);

app.use(express.static(`${__dirname}/../client`));

app.listen(3000);

console.log(`listening on port 3000`);

module.exports = app;