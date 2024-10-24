const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'contact.html'));
});

app.post('/contact', (req,res) => {
    console.log(req.body);
    res.redirect('/');
});


app.listen(3000, () => console.log('Started server on http://localhost:3000'));