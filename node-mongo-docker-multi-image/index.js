const express = require('express');
const mongoose = require('mongoose');
const app = express();

const database = "mongodb://mymongo:27017/dockernodemulti";

mongoose.connect(database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
.then( () => console.log('database is connected !!!') )
.catch( () => console.log('ERROR !! database connection error !!!') )


app.get('/', (req, res) => {
    res.json({
        message: 'Your are visiting the node multi image docker project'
    })
});


app.listen(9000, () => console.log('listening on port 9000'));