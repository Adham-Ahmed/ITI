const ClientsController = require('../controllers/clients_controller')
const express =require('express')
const router =express.Router()



  router.get('/api/clients', ClientsController.all)
  // //
    router.post('/api/clients', ClientsController.create_Client)
  // //
    router.put('/api/clients/:id', ClientsController.edit)
  // //
    router.delete('/api/clients/:id',  ClientsController.delete)
  // //
    router.get('/api/clients/:id', ClientsController.details)

module.exports=router






