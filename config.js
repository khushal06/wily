import * as firebase from 'firebase' 



require('@firebase/firestore')

var firebaseConfig = {
   apiKey: "AIzaSyBI_6KhkBRmacZ1wuIDJYA-H53CXyau-P0", 
   authDomain: "willy-app-f2f57.firebaseapp.com", 
   databaseURL: "https://willy-app-f2f57.firebaseio.com",
    projectId: "willy-app-f2f57",
     storageBucket: "willy-app-f2f57.appspot.com",
     messagingSenderId: "957572252876", 
     appId: "1:957572252876:web:c77c38bb82a60591efee69",
     measurementId: "G-4Y08PYMXK1" }; 
     
     
     // Initialize Firebase 
     firebase.initializeApp(firebaseConfig);
     
     
     export default firebase.firestore();






























/* import * as firebase from "firebase"

require ("@firebase/firestore")

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyABE251QjIlsrG8stS2rbG7G_1YRfqW-WE",
    authDomain: "wliy-cedd3.firebaseapp.com",
    databaseURL: "https://wliy-cedd3.firebaseio.com",
    projectId: "wliy-cedd3",
    storageBucket: "wliy-cedd3.appspot.com",
    messagingSenderId: "255490748676",
    appId: "1:255490748676:web:e1142a9c304de72b8de051",
    measurementId: "G-JP4VKCF7H1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    export default firebase.firestore()
*/