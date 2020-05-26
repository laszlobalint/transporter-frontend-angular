const express = require('express');

const app = express();

app.use(express.static('./dist/transporter'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: '/dist/transporter/' });
});

app.listen(process.env.PORT || 8080);
