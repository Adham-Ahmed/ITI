const express = require('express')
const app = express()
const mongoose = require('mongoose')
const indexRoute=require('./routes/index_routes') ///////////////
const clientRoute=require('./routes/client_routes')

// //
mongoose.connect('mongodb://localhost/muber', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// //
app.use(express.json())
// //
app.use(indexRoute) ///////////
app.use(clientRoute)

// clientRoute(app)
// //
// custom middle ware to handle error
app.use((err, req, res, next)=>{
  // console.log(err.message);
  res.status(422).send({error: err.message})
})
module.exports = app;
