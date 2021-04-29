const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listhargaSchema = new Schema({
    kategoriPelayanan:{
        type:  String
    },
    typeKendaraan: {
        type: String,
    },
    harga:  {
        type: Number
    },
    
},
{
timestamps:true
})

module.exports = mongoose.model('listharga', listhargaSchema)