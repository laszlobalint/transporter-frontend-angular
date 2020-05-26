const express = require('express');

const app = express();

app.use(express.static('./dist/transporter.json'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: '/dist/transporter.json/' });
});

app.listen(process.env.PORT || 8080);
