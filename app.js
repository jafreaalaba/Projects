const express = require('express');
const ejs = require('ejs');

const app = express ();
const PORT = 3000;





app.set('view engine', 'ejs');
app.set('viers', './views');


//route controller with a path parameter
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User with ID ${userId}`);
});
app.get('/', (req, res) => {
    const data = {
        title: 'Hello World!',
        message: 'Welcome to my website!'
    }
});

app.listen(3000, () => {
    console.log('Server started on port ${PORT}');
});
