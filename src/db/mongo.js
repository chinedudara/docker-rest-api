const { MongoClient } = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'dockerize-node'

MongoClient.connect(connectionUrl, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Error connecting to db', error);
    }

    console.log('Connection Successful');
})