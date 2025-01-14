import { collection, getDocs } from 'firebase/firestore';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { db, auth } from './firebase';
import {userCredentialsEmail} from './helper';

export const clientsList = collection(db, 'orderList'); //повертає посилання на колекцію
export const orderList = collection(db, 'orderList');

export const getClientsList = async () => {
  const clientsRef = collection(db, 'orderList');
  const querySnapshot = await getDocs(clientsRef);
  const clients = querySnapshot.docs.map((doc) => doc.data());
  return clients;
};

export const getOrdersList = async () => {
  const ordersRef = collection(db, 'orderList');
  const querySnapshot = await getDocs(ordersRef);
  const orders = querySnapshot.docs.map((doc) => doc.data());
  return orders;
};

const createUserEmailSndPassword = ({email, password}: userCredentialsEmail) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

const signInUserEmailAndPassword = ({email, password}: userCredentialsEmail) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
