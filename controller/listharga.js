const  listhargaModel = require('../model/listharga')
const { requestResponse }  =  require('../config')
const  objectId = require('mongoose').Types.ObjectId

exports.tambah = (data) => 
 new Promise((resolve, reject) => {
    listhargaModel.create(data)
    .then(() =>  resolve(requestResponse.sukses('berhasil menginput data')))
    .catch(() => reject(requestResponse.gagal('gagal diinput')))
})


exports.lihat = () => 
 new Promise((resolve, reject) => {
    listhargaModel.find()
    .then((data) =>  resolve(requestResponse.semuaData(data)))
    .catch(() => reject(requestResponse.gagal('gagal diinput')))
})


exports.lihatbedasarkanId = (id) => 
 new Promise((resolve, reject) => {
    listhargaModel.find({
        _id: objectId(id)
    })
    .then((data) =>  resolve(requestResponse.semuaData(data)))
    .catch(() => reject(requestResponse.gagal('gagal diinput')))
})

exports.ubah = (data, id) => 
 new Promise((resolve, reject) => {
    listhargaModel.updateOne({
        _id: objectId(id)
    },  data)
    .then(() =>  resolve(requestResponse.sukses('berhasil mengubah data')))
    .catch(() => reject(requestResponse.gagal('gagal mengubah data')))
})

exports.hapus = (id) => 
 new Promise((resolve, reject) => {
    listhargaModel.deleteOne({
        _id: objectId(id)
    })
    .then(() =>  resolve(requestResponse.sukses('berhasil menghapus data')))
    .catch(() => reject(requestResponse.gagal('gagal mengubah data')))
})

