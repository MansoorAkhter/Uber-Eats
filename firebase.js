import firebase from 'firebase/compat/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXZ65-yWXBiFcrxvYlreYx181d5U2OoEs",
  authDomain: "uber-eats-clone-rnative.firebaseapp.com",
  projectId: "uber-eats-clone-rnative",
  storageBucket: "uber-eats-clone-rnative.appspot.com",
  messagingSenderId: "916171553466",
  appId: "1:916171553466:web:7b0384195f9b827bb3a083",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;

