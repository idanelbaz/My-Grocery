// const fs = require('fs')
const dbService = require('./db.service.js')
const ObjectId = require('mongodb').ObjectId


module.exports = {
    query,
    getById,
    remove,
    add,
    update,
    getByGenre,
    getByBaseGenre,
    getBySearch,
}

async function query() {
    const collection = await dbService.getCollection('shopItem')
    try {
        const shopItems = await collection.find({}).toArray();
        return shopItems
    } catch (err) {
        console.log('ERROR: cannot find Items')
        throw err;
    }
}

async function getById(shopItemId) {
    const collection = await dbService.getCollection('shopItem')
    try {
        const shopItem = await collection.findOne({ "_id": ObjectId(shopItemId) })
        return shopItem
    } catch (err) {
        console.log(`ERROR: cannot find shop Item ${shopItemId}`)
        throw err;
    }
}

async function getByGenre(genre) {
    const collection = await dbService.getCollection('shopItem')
    try {
        const shopItems = await collection.find({ "genre": genre }).toArray();
        return shopItems
    } catch (err) {
        console.log(`ERROR: cannot find shop Item ${genre}`)
        throw err;
    }
}

async function getByBaseGenre(baseGenre) {
    const collection = await dbService.getCollection('shopItem')
    try {
        const shopItems = await collection.find({ "baseGenre": baseGenre }).toArray();
        return shopItems
    } catch (err) {
        console.log(`ERROR: cannot find shop Item ${baseGenre}`)
        throw err;
    }
}

async function getBySearch(filterBy) {
    const collection = await dbService.getCollection('shopItem')
    try {
        const shopItems = await collection.find({ "name" : new RegExp(filterBy, 'i') }).toArray();
        return shopItems
    } catch (err) {
        console.log(`ERROR: cannot find shop Item ${filterBy}`)
        throw err;
    }
}

async function remove(shopItemId) {
    const collection = await dbService.getCollection('shopItem')
    try {
        await collection.remove({ "_id": ObjectId(shopItemId) })
    } catch (err) {
        console.log(`ERROR: cannot remove shopItem ${shopItemId}`)
        throw err;
    }
}

async function update(shopItem) {
    const collection = await dbService.getCollection('shopItem')
    try {
        const strId = shopItem._id
        const _id = new ObjectId(strId)
        shopItem._id = _id
        await collection.updateOne({ _id }, { $set: shopItem })
        return shopItem
    } catch (err) {
        console.log(`ERROR: cannot update shopItem ${shopItem._id}`)
        throw err;
    }
}



async function add(shopItem) {
    const collection = await dbService.getCollection('shopItem')
    try {
        await collection.insertOne(shopItem);
        return shopItem;
    } catch (err) {
        console.log(`ERROR: cannot insert shopItem`)
        throw err;
    }
}