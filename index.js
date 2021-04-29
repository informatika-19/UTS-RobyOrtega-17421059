const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const routeUser = require('./route/User');


const  mongoUrl = mongoose.connect('mongodb://localhost:27017/uts', 
{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('berhasil terkoneksi kedatabase')
}).catch(() => {
    console.log('gagal terkoneksi kedatabase')
});

app.use(cors())

app.use(bodyParser.json({
    extended:  true,
    limit:  '20mb',

}))

app.use(bodyParser.urlencoded({
    extended:  true,
    limit:  '20mb',
    
}))


// user router
app.use('/user', routeUser)
// user router

app.use('/listharga', require('./route/listharga'))





app.listen(3000, () => {
    console.log('Server on port 3000')
})