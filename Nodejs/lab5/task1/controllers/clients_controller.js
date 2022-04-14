const Client = require('../models/client')
// //
module.exports = {
//   // ec6 -> all:all
  all(req, res, next){
    const limit = parseInt(req.query.limit) || ''
      Client.find({}).limit(limit)
    .then(Client => res.status(200).send(Client))
    .catch(next)
  }
,
//   //name of endpoint
  create_Client(req, res, next){
    const ClientProps = req.body;
    //query mongoose
    Client.create(ClientProps)
      .then(Client => res.status(201).send(Client))
      .catch(next)
  },
  edit(req, res, next){
    const ClientId = req.params.id;
    const ClientProps = req.body;
//
    Client.findByIdAndUpdate({_id: ClientId}, ClientProps)
    .then(()=> Client.findById({_id:ClientId}))
    .then(Client => res.status(200).send(Client))
    .catch(next)
  },
  delete(req, res, next){
    const ClientId = req.params.id;
    Client.findByIdAndRemove({_id: ClientId})
    .then(Client => res.status(204).send(Client))
    .catch(next)
  },
  details(req, res, next){
    const ClientId = req.params.id;

    Client.findById({_id:ClientId})
    .then(Client => res.status(200).send(Client))
    .catch(next)
  }
}
