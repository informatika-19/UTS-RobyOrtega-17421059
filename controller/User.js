const userModel = require('../model/User')
const bcrypt = require('bcrypt')
const {requestResponse} = require('../config')

exports.register = (data) => 
new Promise((resolve, reject) => {
  userModel.findOne({
      username: data.username
  }).then(user => {
      if(user) {
          resolve(requestResponse.gagal('username sudah terdaftar'))
      }else{
          bcrypt.hash(data.password, 10, (err, hash) => {
            data.password = hash
            userModel.create(data)
            .then(() => resolve((requestResponse.sukses('berhasil registrasi'))))
            .catch(() => reject(requestResponse.serverError))
          })
      }
  })
})

exports.lihatSemuaData = () => 
new Promise  ((resolve, reject)  => {
  userModel.find({})
  .then(user => resolve(requestResponse.semuaData(user)))
  .catch(() => reject(requestResponse.gagal('Gagal memuat data')))
})

exports.login = (data) => 
new Promise ((resolve, reject) => {
    userModel.findOne({
        username: data.username
    }).then((user) => {
        if(user)  {
            if(bcrypt.compareSync(data.password, user.password)) {
                resolve(requestResponse.suksesLogin(user))
            }else{
                reject(requestResponse.gagal('Password salah'))
            }
        }else{
            reject(requestResponse.gagal('User tidak terdaftar'))
        }
    })
})