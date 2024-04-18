const express = require('express')
const router = express.Router()
const Media = require('../models/media')

//GET: /media 
router.get('/', async(req, res) => {
    try{
        const media = await Media.find()//find data
        return res.json(media).status(200)//get data and convert to json and send it back with an OK response 
    }
    catch(err){
        return res.json(err).status(404) //404 not found for errors 
    }
}) 

module.exports = router 