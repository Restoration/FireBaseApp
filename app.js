const functions = require('firebase-functions');
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");
const request = require('request-promise');
const data = require('./functions.json');
const databaseUrl = data.database.url;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: databaseUrl
});

var db = admin.database();
var ref = db.ref("room1");

ref.on("value", function(snapshot) {
    console.log(snapshot.val());
},
function(errorObject) {
    console.log("The read failed: " + errorObject.code);
} );
