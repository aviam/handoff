// import and configure firebase
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBszGPbq-gHOzfojiVz-jC-ewPc9SGgR4s",
  authDomain: "yad2yad-79e38.firebaseapp.com",
  databaseURL: "https://yad2yad-79e38.firebaseio.com",
  projectId: "yad2yad-79e38",
  storageBucket: "yad2yad-79e38.appspot.com",
  messagingSenderId: "797033824715",
}
export const firebaseApp = firebase.initializeApp(firebaseConfig)
