var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'Education-DataBoard', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/Education-DataBoard/login.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'Education-DataBoard', 'login.css'));
});

app.get('/Education-DataBoard/register.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'Education-DataBoard', 'register.html'));
});


app.get('/Education-DataBoard/login.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'Education-DataBoard', 'login.css'));
});

app.get('/Education-DataBoard/newvideo.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'Education-DataBoard', 'newvideo.html'));
});

app.post('/Education-DataBoard/student_dashboard.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'Education-DataBoard', 'student_dashboard.html'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
