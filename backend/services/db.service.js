const MongoClient = require('mongodb').MongoClient;

module.exports = {
    connect,
    getCollection
}

const url = (process.env.NODE_ENV === 'production') ?
    'mongodb+srv://idan:saribeni12@cluster0-xnd7v.mongodb.net/test?retryWrites=true&w=majority' :
    'mongodb://localhost:27017';




// Database Name
const dbName = 'shop';

var dbConn = null;

async function connect() {
    if (dbConn) return dbConn;
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true });
        const db = client.db(dbName);
        // console.log(db);

        dbConn = db;
        return db;
    } catch (err) {
        console.log('Cannot Connect to DB', err)
        throw err;
    }
}

async function getCollection(collectionName) {
    const db = await connect()
    var colaction = db.collection(collectionName);
    return colaction
}