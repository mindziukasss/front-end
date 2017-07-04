const express = require('express')
const app = express()
app.use(express.static('public'))

app.set('views engine', 'ejs');

app.get('/', function (req, res) {
    res.render('login')
});

app.get('/account', function (req, res) {
    res.render('account')
});

app.get('/accounts', function (req, res) {
    res.render('accounts')
});

app.get('/logout', function (req, res) {
    res.render('logOut')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
