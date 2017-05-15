let initializeApp = false;
let admin = require('firebase-admin');

if(!initializeApp){

    const credentialPath = './credential/test-service.json';
    const firebaseUrl = "https://test-2170f.firebaseio.com/";
    let serviceAccount = require(credentialPath);

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: firebaseUrl
    });
    initializeApp = true;
}


module.exports = admin;
