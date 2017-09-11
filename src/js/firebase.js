import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyB5yNNpFJvQs_O8VEMqIF-NmMUfsMvzHZE',
  authDomain: 'dowhop-profile-dev.firebaseapp.com',
  databaseURL: 'https://dowhop-profile-dev.firebaseio.com',
  projectId: 'dowhop-profile-dev',
  storageBucket: '',
  messagingSenderId: '563843560362'
};

export default firebase.initializeApp(config);

export var database = firebase.database();
export var auth = firebase.auth();
export var storage = firebase.storage();
export var GithubAuthProvider = new firebase.auth.GithubAuthProvider();
