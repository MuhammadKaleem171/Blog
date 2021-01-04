
import firebase from 'firebase'

const firebaseConfig = {

    apiKey: "AIzaSyCkP89oJdxK5AJHoUScE4jltSaml8t-UOQ",
    authDomain: "blogpractice-ded87.firebaseapp.com",
    databaseURL: "https://blogpractice-ded87.firebaseio.com",
    projectId: "blogpractice-ded87",
    storageBucket: "blogpractice-ded87.appspot.com",
    messagingSenderId: "910078227001",
    appId: "1:910078227001:web:2d88c8dd2b5eaf4ae653e8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;