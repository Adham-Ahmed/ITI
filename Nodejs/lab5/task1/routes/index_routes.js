
const express =require('express')
const router =express.Router()
// console.log("in index_routes file")
router.get('/', (req, res)=>{
      res.send('Welcome to muber')
    })
module.exports=router

