const functions = require('firebase-functions');
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");
const data = require('./functions.json');
const databaseUrl = data.database.url;


class Database{
    constructor(){
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: databaseUrl,
        });
    }
    getData(tableName){
        var db = admin.firestore();
        db.collection(tableName).get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    console.log(doc);
            });
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
    }
}
module.exports = Database;
