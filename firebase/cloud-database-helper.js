var apiDatabaseRef = function (path) {
    var admin = require('./cloud-firebase-admin.js');

    return admin.database().ref(path);
};

module.exports = function getApiDatabaseRef(path) {
  if(!path){
    path = "/";
  }
  return apiDatabaseRef(path);
}
