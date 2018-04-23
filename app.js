
const pug = require('pug');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const requests = require('./js/requests');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));


app.set('view engine', 'pug');

app.get('/', (req, res) => {
 res.render('layout');
});

//send the data from the requests
app.get('/tweets', ( req, res) => {

    res.send(requests.tweetsJSON);

});

app.get('/friends', ( req, res) => {

    res.send(requests.friendsJSON);

});

app.get('/messages', ( req, res) => {

    res.send(requests.messagesJSON);

});


// error handling
app.use((req, res, next) => {
  const err = new Error("Not Found!");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.log("Error!", err.message)

});

app.listen(3000, () => console.log('The application is running on localhost:3000!'));
