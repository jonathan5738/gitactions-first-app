const express = require('express') 
const app = express() 

app.get('/', (req, res, next) => {
    return res.status(200).send({message: 'welcome to this website'})
})
app.post('/send', (req, res, next) => {
    try{
        if(!Object.keys(req.body).includes('username')) throw new Error('username not found')
        if(!Object.keys(req.body).includes('password')) throw new Error('password not found')
        const {username, password} = req.body
        return res.status(200).send({username, password})
    } catch(err){
        return res.status(400).send({error: err.message})
    }
})

module.exports = {app}