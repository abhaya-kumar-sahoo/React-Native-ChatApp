// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {firebase} from '@react-native-firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAJv7Hs7kXFHajx-ZvxgUdKZBAqZui3WXM',
  authDomain: 'abhaya-8e18d.firebaseapp.com',
  projectId: 'abhaya-8e18d',
  storageBucket: 'abhaya-8e18d.appspot.com',
  messagingSenderId: '390039177047',
  appId: '1:390039177047:web:73b0a80862082ea6266012',
  measurementId: '${config.measurementId}',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export {auth};
