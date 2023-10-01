// Create web server
// Run: node comments.js
// Access: http://localhost:3000

var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var comments = [
  { name: 'John', message: 'Hello World' },
  { name: 'Mary', message: 'Hi, there' }
];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/comments', function (req, res) {
  res.json(comments);
});

app.post('/comments', function (req, res) {
  comments.push(req.body);
  res.json(comments);
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});