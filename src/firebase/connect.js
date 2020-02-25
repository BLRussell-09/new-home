import firebase from 'firebase';
import constants from './constants';

const firebaseApp = () => {
  firebase.initializeApp(constants.firebaseConfig);
  firebase.analytics();
};

export default firebaseApp;
