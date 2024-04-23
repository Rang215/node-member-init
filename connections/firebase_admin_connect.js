var admin = require("firebase-admin");
// 輸入自己的金鑰
var serviceAccount = require("../project-519f1-firebase-adminsdk-idnnr-accd5b13e7.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://project-519f1-default-rtdb.firebaseio.com"
});

var db = admin.database();

module.exports = db;