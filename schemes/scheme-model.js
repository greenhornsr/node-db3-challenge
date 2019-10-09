const knexConfig = require('../knexfile')
const knex = require('knex')
const db = knex(knexConfig).development

module.exports = {
    find, 
    findbyid,
    add,
    modify,
    remove
}

function find (){
    return null
}

function findbyid (){
    return null
}

function add (){
    return null
}

function modify (){
    return null
}

function remove (){
    return null
}
