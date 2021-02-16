

//const api_key=process.env.API_KEY
require('dotenv').config()

require('dotenv').config()

console.log(" TESTING IF IT WORKS")

const dotenv = require('dotenv')

const api_key=process.env.API_KEY;
const result = dotenv.config()
 
if (result.error) {
  throw result.error
}
 
console.log(result.parsed)

//see your keys here:
//const fireapi = require('fireapi')(functions.config().fireapi.key);

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: api_key,
    authDomain: "blogtutorial2021.firebaseapp.com",
    projectId: "blogtutorial2021",
    storageBucket: "blogtutorial2021.appspot.com",
    messagingSenderId: "16606246242",
    appId: "1:16606246242:web:7df7506236ff530a08e83b",
    measurementId: "G-4ZG0R94DG7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


 

 