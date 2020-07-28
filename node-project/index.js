const express = require('express')
const app =  express();


app.get('/', (req, res) => {
    let greeTemp = '<h1>Welcome to Docker Node App</h1>'
    res.send(greeTemp);
});

app.get('/getProject', (req, res) => {
    res.json({
        message:"I am docker node project"
    });
});

app.get('/login', (req, res) => {
    res.json({
        message:"I am docker node project - login page"
    });
});

app.listen(9000, () => console.log('app listening on 9000'))
