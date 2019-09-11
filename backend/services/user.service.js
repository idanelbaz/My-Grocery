const dbService = require('./db.service.js')
const ObjectId = require('mongodb').ObjectId

module.exports = {
   logIn,
   signUp,
}


async function logIn(currUser) {
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.find({ $and: [{ username: currUser.username }, { password: currUser.password }] }).toArray();
        if (user) {
            return user
        } else return Promise.reject('Cant find the user')
    } catch (err) {
        console.log(`ERROR: cannot login`)
        return Promise.reject('cant login')
    }
}

async function signUp(newUser) {
    const collection = await dbService.getCollection('dog')
    try {
        await collection.insertOne(newUser);
        return newUser;
    } catch (err) {
        console.log(`ERROR: cannot insert dog`)
        throw err;
    }
}