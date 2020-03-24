import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBB8FfZt_f0bi87oLfYjOZzgRpVIPnSzd0",
    authDomain: "meuapp-a5f9d.firebaseapp.com",
    databaseURL: "https://meuapp-a5f9d.firebaseio.com",
    projectId: "meuapp-a5f9d",
    storageBucket: "meuapp-a5f9d.appspot.com",
    messagingSenderId: "709381409518"
  };

  firebase.initializeApp(config);

  export default firebase;