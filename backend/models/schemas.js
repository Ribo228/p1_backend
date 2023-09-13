const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{type:String},
    email:{type:String},
    website:{type:String},
    entryData: {type:Date, default:Date.now}
})

const contactSchema = new Schema({
    email:{type:String, require:true},
    website:{type:String, require:true},
    message:{type:String, require:true},
    entryData: {type:Date, default:Date.now}
})

const Users = mongoose.model('Users', userSchema,'user')

const Contact = mongoose.model('Contact', contactSchema, 'contact_form')

const mySchemas = {'Users': Users, "Contact": Contact}
module.exports = mySchemas
