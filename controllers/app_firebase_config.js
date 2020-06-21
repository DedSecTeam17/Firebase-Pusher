var admin = require("firebase-admin");

var serviceAccount = require("../practiceapp-d1c04-firebase-adminsdk-hagiu-4c0752b1bf");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://practiceapp-d1c04.firebaseio.com"
})

module.exports.admin = admin
