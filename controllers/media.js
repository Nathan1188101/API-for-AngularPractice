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

//POST: /media
router.post('/', async(req, res) => {
    try{

        const media = await Media.create(req.body)//create data
        return res.status(201).json(media)//send back the data with a created status (201) 

    }catch(err){
        return res.json(err).status(404) //404 not found 
    }
})

module.exports = router 