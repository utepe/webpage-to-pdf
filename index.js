const express = require('express');
const app = express();

const pdf = require('./routes/pdf');

app.use(express.json());
app.use('', pdf);

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Listening on port http://localhost:${port}...`) });