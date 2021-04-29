const  router = require('express').Router()
const listhargaController = require('../controller/listharga')

router.post('/tambah', (req,res) => [
    listhargaController.tambah(req.body)
    .then(result => res.json(result))
    .catch(err =>  res.json(err))
])

router.get('/lihat', (req,res) => [
  listhargaController.lihat()
  .then(result => res.json(result))
  .catch(err =>  res.json(err))
])

router.get('/lihat/:id', (req,res) => [
  listhargaController.lihatbedasarkanId(req.params.id)
  .then(result => res.json(result))
  .catch(err =>  res.json(err))
])


router.put('/ubah/:id', (req,res) => {
  listhargaController.ubah(req.body ,req.params.id)
  .then(result => res.json(result))
  .catch(err =>  res.json(err))
})


router.delete('/hapus/:id', (req,res) => {
  listhargaController.hapus(req.params.id)
  .then(result => res.json(result))
  .catch(err =>  res.json(err))
})










module.exports = router