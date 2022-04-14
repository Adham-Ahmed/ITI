const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 

const ClientSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  }
  ,
  phoneNumber: {
    type: String
  }
  ,
  userName: {
    type: String,
    unique: true

  }
})
// //
const Client = mongoose.model('client', ClientSchema);
module.exports = Client;
