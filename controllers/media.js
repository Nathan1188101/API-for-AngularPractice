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

    }
    catch(err){
        return res.json(err).status(404) //404 not found 
    }
})

//PUT: /media/abc123 => update selected media doc from _id param
router.put('/:_id', async(req, res) => {
    try{                                       //find this document, update it to the new data with req.body 
        const media = await Media.findByIdAndUpdate(req.params._id, req.body)
        return res.status(204).json(media) //204: resource updated 
    }
    catch(err){
        return res.status(404).json(err) //404 not found 
    }
})

//DELETE: /media/abc123 => remove selected media doc from _id param
router.delete('/:_id', async(req, res) => {
    try{
        await Media.findByIdAndDelete(req.params._id)//find and delete data
        return res.status(202).json({}).json //202: no content 
    }
    catch(err){
        return res.json(err).status(404) //404: not found 
    }
})

module.exports = router 